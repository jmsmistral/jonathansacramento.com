So, what is [churn](https://en.wikipedia.org/wiki/Churn_rate), and why do we care?

In a business context, churn or churn rate refers to the number of customers leaving your business. Typically, this measure is tracked in subscription-based business models (like telecom operators, or most SaaS online startups), since it's cheaper to retain current customers than acquire them. The aim is to predict the point at which the customer decides to leave (before the subscription runs out) so we can try to retain the customer... perhaps by offering a discount, or other goodies. This is especially important for your high-value customers!

In this post I will describe a way of predicting churn based on customers' inactivity profile that I've applied in various client engagements. Without using machine learning algorithms, the model delivers an interpretable prediction of churn that gives a fairly accurate insight into the customers leaving the base. This post will not cover the implementation details - it should be straight forward to do this from the conceptual understanding taken from this post (I've previously implemented this in SQL, Python, and SAS). Also, I won't be covering other related topics that follow from this, like calculating the value of churners to give a view of the value that is flowing out of a business (if you're interested in this or have questions, feel free to reach out!).

Let's start...

## Customer Activity

Before we start predicting churn, we need to track our customers' activity over time. The objective being to know if a customer is using the service. But what does activity mean? Activity can be defined in numerous ways (below are some examples). A customer is active:

- If a customer's subscription hasn't expired
- When the customer performs an outgoing event in a given month (e.g. outgoing call or message in a telecom customer)
- If a customer has generated some revenue in a given month (non-negative ARPU)
- If a customer has any outgoing or incoming
- A combination of these but for a period of three months

For our purposes we will be analysing customer behaviour over months

Once we decide on which definition to use, we can apply it to calculate a binary value (1 or 0) for each month: If in month x, customer is active, then set activity value to one, otherwise leave as zero.

I've typically used the total monthly ARPU as the definition for activity, but this largely depends on the context of your analysis.

## ... and Inactivity

Now that we have a monthly activity flag for each customer, we need to use this to build an inactivity profile. What this means is that, for each customer, we want to count the number of consecutive months of inactivity. We can visualise this as follows, where the blue table shows the activity of each customer for each month, and the green table the inactivity profile. I have chosen a one year window of analysis in this example (the total span of time we're analyzing) - I will refer to this in my explanation below:

- **Customer 1** - this customer enters our window of analysis as active, and then becomes inactive in May (this being the first inactive month). The customer then continues being inactive till December, which is the end of our window of analysis. The inactivity profile therefore counts the number of consecutive inactive months from May till December.
- **Customer 2** - like Customer 1, this one starts-off in active state. However, this customer stops being active between March and June, has a single month of activity, after which she has a couple of months of inactivity before returning to an active state for the final three months in our window of analysis. In this case our count of consecutive inactive months resets each time the customer returns to an active state. It is typical to find this 'on-off' behaviour.
- **Customer 3** - our final example customer enters our window of analysis in inactive state. This can happen either because the customer's subscription has already expired (probably best to have excluded these before starting the analysis), or the customer is inactive. As we might not have visibility before the window of analysis, if the customer has already been inactive for a few months, we won't know. Therefore, we flag these months specifically - I use the value -1 for this purpose.