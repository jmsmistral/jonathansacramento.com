So, what is [churn](https://en.wikipedia.org/wiki/Churn_rate), and why do we care?

In a business context, **churn** or **churn rate** refers to the number of customers leaving your business. Typically, this measure is tracked in subscription-based business models (like telecom operators, or most SaaS online startups), since **it's cheaper to retain current customers than acquire them**. The aim is to predict the point at which the customer decides to leave (before the subscription runs out) so we can try to retain the customer... perhaps by offering a discount, or other goodies. This is especially important for your high-value customers!

**In this post I will describe a way of predicting churn based on customers' inactivity profile that I've applied in various client engagements**. Without using machine learning algorithms, the model delivers an interpretable prediction of churn that gives a fairly accurate insight into the customers leaving the base. This post will not cover the implementation details - it should be straight forward to do this from the conceptual understanding taken from this post (I've previously implemented this in SQL, Python, and SAS). Also, I won't be covering other related topics that follow from this, like calculating the value of churners to give a view of the value that is flowing out of a business.

Let's start...

## Customer Activity

Before we start predicting churn, we need to track our customers' activity over time. The objective being to know if a customer is using the service. **But what does activity mean?** Activity can be defined in numerous ways (below are some examples). A customer is active:

- If a customer's subscription hasn't expired
- When the customer performs an outgoing event in a given month (e.g. outgoing call or message in a telecom customer)
- If a customer has generated some revenue in a given month (non-negative [ARPU](https://en.wikipedia.org/wiki/Average_revenue_per_user))
- If a customer has any ***outgoing*** or ***incoming***
- A combination of these but for a period of three months

For our purposes we will be analysing customer behaviour over months

Once we decide on which definition to use, we can apply it to calculate a binary value (1 or 0) for each month: **If in month x, customer is active, then set activity value to one, otherwise leave as zero**.

I've typically used the total monthly ARPU as the definition for activity, but this largely depends on the context of your analysis.

## ... and Inactivity

Now that we have a monthly activity flag for each customer, we need to use this to build an inactivity profile. What this means is that, **for each customer, we want to count the number of consecutive months of inactivity**. We can visualise this as follows, where the blue table shows the activity of each customer for each month, and the green table the inactivity profile. I have chosen a one year **window of analysis** in this example (the total span of time we're analyzing) - I will refer to this in my explanation below:

![](/img/predicting-churn-without-machine-learning-1.jpg)

- **Customer 1** - this customer enters our window of analysis as active, and then becomes inactive in May (this being the first inactive month). The customer then continues being inactive till December, which is the end of our window of analysis. The inactivity profile therefore counts the number of consecutive inactive months from May till December.
- **Customer 2** - like Customer 1, this one starts-off in active state. However, this customer stops being active between March and June, has a single month of activity, after which she has a couple of months of inactivity before returning to an active state for the final three months in our window of analysis. **In this case our count of consecutive inactive months resets each time the customer returns to an active state**. It is typical to find this 'on-off' behaviour.
- **Customer 3** - our final example customer enters our window of analysis in inactive state. This can happen either because the customer's subscription has already expired (probably best to have excluded these before starting the analysis), or the customer is inactive. As we might not have visibility before the window of analysis, if the customer has already been inactive for a few months, we won't know. Therefore, we flag these months specifically - I use the value -1 for this purpose.


## Churn model

Now that we have our inactivity profile, we can use this to produce a **monthly view of the number of customers for each level of consecutive inactive months within our window of analysis**. We do this by aggregating, for each month, the number of customers in each level of inactivity. This is probably better explained in tabular form:

![](/img/predicting-churn-without-machine-learning-2.jpg)

Each value represents the number of customers in each month that have been inactive for x consecutive months. So, as an example, the first highlighted value (574) is the number of customers in January that have been inactive for one month, from the 4815 customers active in December. The second highlighted value (425) is the number of customers in February that have been consecutively inactive for two months - that is, 425 from the 574 customers inactive for one month in January. ***Here, zero months inactive just represents the number of active customers in the base***.

Using this data, we can compute the **percentage of customers consecutively inactive for each month in our window of analysis**. See the green table below:

![](/img/predicting-churn-without-machine-learning-3.jpg)

The highlighted value (74%) represents the percentage of customers in February that have been inactive for two consecutive months. This is computed as follows: # of customers inactive for 2 consecutive months in Feburary divided by the # of customers inactive for 1 consecutive month in January. In this case, 425 / 574 = 74%.

**We want to get the most representative values, so we take the average of the last four months in our window of analysis**. We might not have enough data to calculate these averages (e.g. in October, November, and December) - in these cases we take the average of all the available values (the values included in the average are highlighted in red):

![](/img/predicting-churn-without-machine-learning-4.jpg)


## Churn probabilities

If you're still reading, congratulations! We're about to cover the most exciting part... For this, we're going to put on our statistician hats :)

Let's review our final objective. This is to **calculate a probability of churn for each consecutive month of inactivity**. That is, if a customer has been inactive for x consecutive months, what is the chance that this customer will churn? Mathematically, we can formulate this using Bayes rule:

![](/img/predicting-churn-without-machine-learning-5.jpg)

However, the term below doesn't make any sense...

![](/img/predicting-churn-without-machine-learning-6.jpg)

This is **the probability of being inactive for x consecutive months, given that you've churned**. If you've churned, you cannot be inactive. So for our purposes we're going to disregard this term (gasp!&nbsp;😱). This leaves us with the final version of the formula:

![](/img/predicting-churn-without-machine-learning-7.jpg)

So let's see what these two terms (numerator and denominator) are, and then compute them for each of the inactive months to give us the probabilities we want...

First the denominator. **The probability of being inactive for each of the x consecutive months** are exactly the four-month average percentages we've previously calculated:

![](/img/predicting-churn-without-machine-learning-8.jpg)

Let's work-out the numerator, or the **probability of churn**, by example. So first-off, what would `P(churn)` be for customers inactive for one month? For these customers to churn, they would have to be consecutively inactive for the entire set of inactive months we're considering. In other words, the customer would have to be inactive for one month, and two months, and three months, and ... so on. Therefore, we can define the probability of churn as:

![](/img/predicting-churn-without-machine-learning-9.jpg)

Now, in the same way, what would `P(churn)` be for customers inactive for two months? For these customers to churn, they would have to be consecutively inactive for two months, and three months, and ... so on. Therefore, we can define the probability of churn as:

![](/img/predicting-churn-without-machine-learning-10.jpg)

We can carry on this way for each of the inactive months:

![](/img/predicting-churn-without-machine-learning-11.jpg)

Here, `n` is a limit on the consecutive months of inactivity where we've noticed that the probability has stabilised. From the table above, we can see that this happens at around the seventh consecutive month, where the probability stabilises at 95-96%.

For simplicity, we're going to assume that **being inactive in consecutive months are independent events**. This allows us to formulate the above as (see [here](https://en.wikipedia.org/wiki/Independence_(probability_theory)) why):

![](/img/predicting-churn-without-machine-learning-12.jpg)

Now we have worked our the numerator and denominator for each month of inactiviy we can finally calculate the churn probabilities (yay!&nbsp;🎉). We've chosen `n` to be seven, as discussed previously.

![](/img/predicting-churn-without-machine-learning-13.jpg)

This would result in the following output:

![](/img/predicting-churn-without-machine-learning-14.jpg)

Note that the probability of churn for active customers (zero inactive months), is simply the multiplication `P(1) x P(2) x P(3) x ... x P(7)`. Here we do not divide by anything because there is no probability of inactivity when customers haven't been inactive.

We can now build a ***churn curve*** for this set of customers. We can use this to decide on when it is most suitable to take specific actions on inactive customers to try and retain them, for example.

![](/img/predicting-churn-without-machine-learning-15.jpg)


## Other considerations

In practice, this model is run over a set of customer segments. In our example we've just been working with a single set of customers, but it's more useful to group these according to different criteria that would make sense for your business case. For example, you can segment by value-band; that is, you segment customers by how valuable they are, and then analyse churn for each segment.

Also, we've been analysing churn in months, but it would be useful to have a more granular view, weekly or even daily.
