We call a lot of people engineers these days. Software engineers, data engineers, machine learning engineers, platform engineers... the list goes on. But what exactly makes the work *engineering*? Is it writing code? Building something complicated? Using maths? Having "engineer" somewhere in your job title?

If I write a script that gets a job done, have I engineered something? What if that script becomes important enough that hundreds of people depend on it every day? What changes?

I've been thinking about this for a while, and I think the easiest way to answer it is to forget about software for a moment and go back to the basic problem engineering exists to solve.

The world is messy. Materials vary, measurements are imperfect, machines wear out, people make mistakes, and requirements change. Yet we still manage to build bridges that stay up, aircraft that fly, power grids that work, and software systems that people can depend on.

So, what are engineers actually doing?

> ## Engineering is the process of taking a problem in an uncertain and constrained world, and creating a solution whose behaviour we can depend on.

That definition is deliberately broad. It applies to a bridge, a database, a water system, an aircraft, a data pipeline, or a distributed service. The materials are different, but much of the thinking is similar.

## Start with the problem

Engineering starts with something we want to achieve.

We need to get people safely across a river. We need to process payments without losing money. We need to make yesterday's sales data available to the finance team every morning.

The starting point isn't *"build a bridge"*, *"use Kafka"*, or *"create a data lake"*. Those are possible solutions. The problem comes first.

This distinction matters because it separates engineering from technology. An engineer can know a tool very well and still decide not to use it. Sometimes the best solution is the boring one.

The [National Academies' Reference Guide on Engineering](https://www.ncbi.nlm.nih.gov/books/NBK621593/) makes a useful distinction between science and engineering: science generally tries to understand the world, while engineering starts with a goal and tries to create something that satisfies it.

Science might ask:

> *How does this material behave under stress?*

Engineering asks:

> *Given what we know about this material, can we build something that safely carries the load we need?*

For software, the equivalent might be understanding how a database behaves under concurrent writes, then deciding how to design a payment process so that two requests don't charge the customer twice.

The engineer is trying to get from **a problem to a dependable solution**.

## The annoying thing about reality

If the world behaved exactly as expected, engineering would be much easier.

Imagine designing a bridge where every vehicle had exactly the same weight, the wind never changed, every piece of steel was identical, every measurement was perfect, and nothing corroded. You could make some very precise assumptions.

Reality doesn't cooperate like that.

Engineers therefore work with uncertainty. They don't wait for it to disappear. They try to understand enough of it to make reasonable assumptions, then design around the parts that can hurt them.

Physical engineers use tolerances, inspections, safety margins and tests. The aim is to stop normal variation from producing unacceptable outcomes.

Software has the same problem, even though the code itself can feel deterministic. Networks fail. Machines disappear. Dependencies become unavailable. Users do unexpected things. Someone deploys a bad configuration. Data arrives late. A field that has "always" been populated suddenly isn't.

Production is where our neat program meets the messy world around it.

A database transaction gives us guarantees about how changes are applied. A schema constrains the shape of data. A timeout puts a bound on how long we're prepared to wait. Idempotency lets us repeat an operation without repeating its effect. Tests challenge assumptions before changes reach production, while monitoring tells us when the real system has moved outside the behaviour we expected.

The practical job of engineering is to create useful guarantees around uncertainty. Those guarantees don't make a system perfect; they make it predictable enough to depend on.

## Dependable doesn't mean perfect

Every real engineering problem has constraints.

We have limited time and money. We inherit systems we can't easily replace. There may be regulatory requirements, performance targets, deadlines, or operational limits. Requirements also conflict: making one property better often makes something else worse.

A system can usually be made more reliable, but reliability costs something. A pipeline can run faster with more infrastructure. A platform can support more use cases at the price of more complexity. We can validate more properties of a dataset, but there comes a point where the checks cost more than the risk they are reducing.

There usually isn't one correct design waiting to be discovered. There are possible designs with different properties, and the job is to choose one that satisfies the important constraints well enough.

Google's [Site Reliability Engineering material on risk](https://sre.google/sre-book/embracing-risk/) expresses this neatly for software. Reliability isn't something to maximise without limit; the useful question is how much reliability a particular system needs, given the cost of achieving it.

This applies directly to data engineering. If an internal management report is delayed by a few minutes, that might be annoying but survivable. If the same data drives automated financial transactions, the consequences are very different. The engineering should follow the cost of failure.

Good engineering means understanding **which properties matter, how much they matter, and what we are willing to trade to get them**.

## We learn by building

Calling engineering *applied science* gets part of the way there, but it understates how much engineers learn through the act of building and operating things.

We make prototypes, benchmark systems, run load tests, observe production, and investigate failures. A component behaves differently from what we expected, so we change the design and try again.

Walter Vincenti explores this in [*What Engineers Know and How They Know It*](https://www.press.jhu.edu/books/title/3022/what-engineers-know-and-how-they-know-it). His examples come mostly from aeronautical engineering, but the idea translates well to software: engineering develops its own practical knowledge through design, testing and use.

Anyone who has operated a production system will recognise this. Documentation and architecture diagrams only take you so far. Some things become obvious after the system has been running for a while and real users, real traffic and real failures have had a chance to expose your assumptions.

Failure is useful for the same reason. When something breaks, we learn where our model of the system differed from reality.

Henry Petroski's [*To Engineer Is Human*](https://www.penguinrandomhouse.com/books/130247/to-engineer-is-human-by-henry-petroski/) looks at how engineering progress is shaped by learning from failure. The point isn't that failure is desirable. Some failures are extremely expensive. The useful part is the evidence it gives us.

A test challenges an assumption before production does. Monitoring compares expected behaviour with actual behaviour. An incident shows us a failure mode that we misunderstood, didn't anticipate, or didn't protect against strongly enough.

If we learn nothing from that information, we are likely to repeat the same mistake.

## Is software engineering just programming?

Software makes this topic slightly confusing because a small program can work perfectly well without much engineering around it.

If I write a utility for myself and it crashes, I restart it. If an input breaks it, I fix the input. I don't need an on-call rota, a deployment pipeline or a detailed availability target.

Then the program becomes useful.

Someone else depends on it. It gets connected to another system. It stores important data. Changes have to happen without breaking existing users. Someone needs to understand it when the original author is on holiday.

The problem has changed.

The code still matters, but now we care about interfaces, compatibility, failure modes, observability, deployment, security, recovery, documentation, maintainability and ownership.

Programming is one of the tools we use to engineer software, but good code on its own doesn't guarantee a dependable system.

Complexity doesn't make something engineering either. A complicated distributed platform isn't inherently more engineered than a small program. If the small program solves the problem more reliably, costs less to operate and has fewer ways to fail, choosing it may be the better engineering decision.

Sometimes good engineering looks sophisticated. Sometimes it means removing half the architecture.

## And what about data engineering?

Data engineering makes the uncertainty problem especially visible because data is our attempt to represent something happening in the real world.

Imagine we have a field called `revenue`.

It's numeric. It isn't null. It arrives on time. Every automated data quality check passes.

But what does `revenue` mean?

Does it include tax? Are refunds removed? Which currency is it in? Does it represent orders placed or payments settled? Did the definition change when the business launched a new product? Does finance interpret it the same way as product?

The data can be technically valid and still be wrong for the decision we're trying to make.

A data engineer therefore has to deal with technical uncertainty such as late events, duplicate records and changing schemas, while also preserving the meaning of the data as it moves through systems.

Schemas make structure explicit. Contracts can capture expectations between producers and consumers. Quality checks turn assumptions into something executable. Lineage helps us understand where data came from and what will be affected when it changes. Reconciliation gives us a way to compare our representation with another source of truth. Documentation and ownership carry meaning that a type system cannot express.

None of that guarantees perfect data. It gives us a better idea of what we can trust, what we cannot, and when something has changed.

## The tools aren't the engineering

This is why I think we sometimes put too much emphasis on tools when talking about engineering capability.

Knowing Spark, Kafka, Kubernetes, dbt, Airflow, Terraform, or whatever else happens to be in the stack can be useful. Sometimes it's essential.

The tool still won't tell you what problem matters, which failures are acceptable, whether the system really needs to be real-time, or whether the extra operational complexity is justified. It won't tell you which guarantees consumers actually need. It certainly won't tell you whether the thing should be built at all.

Those decisions require judgment.

A technology gives us capabilities and trade-offs. Engineering is deciding whether those trade-offs fit the problem we actually have.

The best engineer in the room may know how to build the complicated system. She may also be the person who explains why we don't need to.

## A practical way to look at a system

When I'm looking at a system, I find it useful to ignore the technology for a moment and ask what problem we are solving and what people genuinely need to be able to rely on. From there, I want to know which constraints are real, which assumptions might be wrong, and what failure would actually cost us.

Then I want to know how we will see the system behaving in production, and what we will do when reality disagrees with the design.

Those questions work for a bridge, a backend service, a data platform, or a scheduled pipeline. The answers are different, but the habit is the same: understand the problem, make the important assumptions explicit, decide what needs to be dependable, and keep testing that understanding against reality.

That, to me, is engineering.

And once engineering becomes something done by a group rather than an individual, another question appears: how do you build a culture where those habits spread from one engineer to the next?
