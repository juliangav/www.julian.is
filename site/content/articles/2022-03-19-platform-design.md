---
title: "The Design of Multi-Sided Platforms"
description:
tags: [MultiSidedPlatforms, ProductDesign, UXStrategy]
lastmod: 2022-03-1
date: "2022-03-19"
time: 5 Minutes
categories:
  - "Design"
slug: "platform-design"
images: ["assets/og-pragmatic-design-principles.jpg"]
icon: /assets/aico-pragmatic-design-principles.svg
comments: false
---

Since I wrote my last article, things changed a bit. We went, and continue to go, through a pandemic that has permanently disrupted our daily lives — some for the better, most for the worst. However, with every pandemic comes innovation and collective self-reflection (or so I’ve heard). Over the past two years, we've realized how critical the ever-present digital platform is to our survival as a species.

Take, for example, the platform I dedicate most of my energy towards, Thomasnet.com. During the height of the pandemic, we created an emergency response system that connected manufacturers providing products or materials related to the mass shortage of critical supplies with front-line organizations in need of these supplies.

As we begin to get back to normal, I've decided to share what I've learned at the intersection of product design & multi-sided platforms while spearheading product & design for Thomas. I plan the keep the individual sections of this article brief since the topics I cover can quickly expand into a series of books.

## A Crash Course on Platform Economics

A multi-sided platform (MSP) is a digital, and sometimes physical, a place that enables the exchange of information, goods, or services between sellers/givers and buyers/takers. Uber, for example, is a platform that enables the connection between a person without a car needing a ride and a person with a vehicle able to provide this ride.

Contributing to the popularity of platforms is the decentralization of the service & product suppliers. Airbnb is the largest lodging provider in the world, yet they do not own a single property. The endless array of inventory makes it extremely difficult, but not impossible, for the traditional pipeline business to compete.

Nevertheless, multi-sided platforms have been around for some time. Thomasnet.com, for example, has been around since 1898. Their focus a century ago is the same as today, connecting industrial buyers with industrial suppliers. However, they did this via heavy physical books distributed across the United States.

Platforms have gained immense popularity over the last decade because of the real-time and on-demand service exchange enabled by the supercomputers we carry around in our pockets — which, technically, are also platforms.

Before we jump into the different types of platforms, let's first establish a shared understanding of the integral parts of a platform.

### The Network Effect

According to Geoffrey Parker and Marshall Van Alstyne in [Platform Revolution](https://www.amazon.com/gp/product/0393354350/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0393354350&linkCode=as2&tag=juliangav-20&linkId=054bc6f525d36bd68429746f8cf4fb48), the network effect is the impact the number of users a platform has on the value created for each user. The more compatible users a network has, the more valuable a platform becomes for each of its users. This is the main differentiator between traditional pipeline businesses and multi-sided platforms.

David Sacks, cofounder of Yammer, famously tweeted the following napkin sketch illustrating Uber’s network effect:

(napkin sketch)

The value active suppliers on Thomasnet.com have is based on the number of active buyers on the platform. Growing our buyer base increases the value for our suppliers and vice versa. This is commonly referred to as a **cross-side network effect**. However, only growing suppliers means that each supplier gets a smaller piece of the pie. Only growing buyers means there is less supply available. This is known as a **same-side network effect**.

Balanced growth between the two sides of a platform leads to a **positive network effect** where the value created leads to exponential growth. If unchecked growth takes place or if too many unwanted users join a platform (e.g., spammers), a platform may see the results of **negative network effects**.

One of the bigger mistakes I’ve witnessed organizations make is designing and growing multi-sided platforms with a single-sided approach. And to be fair, that’s where the majority of our collective experience stems from. Every design decision made on a platform needs to take into consideration the respective network effects. If there’s any concept you should retain from this article, let it be this.

### Common Components of a Multi-Sided Platform

#### Value Unit

The information, goods, or services exchanged on the platform. The value unit of OpenTable is a reservation at a restaurant, a booking for Airbnb, a ride for Lyft, etc. Compared to the traditional pipeline business, platforms do not carry the responsibility of directly producing the value unit.

#### Users

Participants in the exchange of information, goods, or services enabled by the platform. Users are mainly categorized as producers, users that create the value unit; consumers, users in need of the value unit; and partners, who join the platform to provide additional value to producers and consumers (usually for a premium).

#### Matchmaking Tools

Tools provided by the platform which facilitate the match between the right users and enable the respective transaction. These could be as simple as a search filter that lets you narrow down the results of what you're looking for or as intricate as a recommendation engine with a sophisticated algorithm that knows what you're looking for.

#### Multihoming

When producers and consumers participate in competing platforms simultaneously. It's common for a driver to be working both Uber and Lyft apps simultaneously, selecting the rides with the best rates — same with riders. For this reason, the user experience of a platform is more critical than ever.

#### Core Transaction

The successful exchange of the value unit between producers and consumers (interchangeably referred to as core interaction). From a business perspective, the sole purpose of a platform is to enable and monetize the core transaction.

### Types of Multi-Sided Platforms

The industry has largely agreed on the four main types of platforms below. While the function remains consistent (enabling the exchange of value units between producers and consumers), the value unit & users vary considerably across different platform types. This variation largely influences how we design the critical matchmaking tools.

#### Product Exchange Platforms

The most common platform type enabling producers to sell products to consumers. Yup, the Amazons, Ebays, & Etsys of the world and digital counterparts to malls. Measuring the matchmaking success of these platforms is straightforward since there's a monetary transaction that takes place when a match is made.

#### Service Exchange Platforms

Platforms focused on enabling the match between a consumer looking for a service and a producer with the ability to provide that service. Taskrabbit, for example, is a platform that matches users needing miscellaneous tasks done with local freelance labor looking to perform these tasks.

Similar to product exchange platforms, a monetary transaction measures the matchmaking success of these platforms. However, because repeat transactions are more common, there's a larger dependency on user satisfaction post transaction — usually measured through ratings paired with user feedback.

#### Information Exchange Platforms

These are platforms that enable the exchange of information between an interchangeable group of producers and consumers with the purpose to inform, entertain, or create a relationship. These platforms vary from social networks (e.g., Facebook, Instagram, TikTok, etc.) to relationship-building platforms of Match.com & Tinder and everything in between.

Because the core transaction in information platforms doesn't include a direct monetary exchange between users, matchmaking success becomes a bit more complicated, but not impossible, to track.

Most social networks depend on the size of their active user base to attract high-paying advertisers (the "partners"). While relationship-building platforms depend on paid user subscriptions to be matched with other users.

#### Technology Platforms

(gaming consoles, smartphones, etc)

## Designing the Core Transaction

Any core transaction that you’re trying to facilitate already exists in one way or another somewhere on the internet. You can find anything on Google and purchase anything on Amazon. However, because these platforms cater to a broad audience with many use cases, they need to provide a broad user experience. This is where smaller platforms gain the upper hand — narrowing down on a specific use case for an optimized user experience.

For example, if I’m looking for a handmade dining room table, I go to Etsy. I’ll be able to find this through Amazon or Google, but I’ll have to dig through the fatty offerings to get to the meaty parts. Etsy reduces the time it takes for me to find what I’m looking for from a trusted seller and transact.

There following three primary use cases of the core transaction are the core ingredients to a successful core transaction:

### Users finding what they’re looking for

The objective is to provide users with what they’re looking for with minimal effort. The utopian UX is to not interact with a platform at all. If you’re looking for a ride, you walk to the street and your rideshare is waiting. However, since we’re decades, if not centuries away from “intuition UX” (I might’ve just coined a term), our second-best option is a seamless search experience tailored to the platform’s purpose.

#### Match Value (TBD)

#### Search UX

These are the tools on the platform a user interacts with to find what they’re looking for. Traditionally, a search bar and filters are the tools used to help users find what they’re looking for. Although these are critical components to the matchmaking process, these tools should be a user’s last resort when interacting with a platform.

We retrieve the information we need from Uber’s platform by telling the app where we want to go. Uber then returns a single result that solves the problem for us. Boom. A search bar with filters and a list of results could also solve this problem — but wow does that sound inefficiently painful (don’t forget, this was the experience just a decade ago).

Most information exchange platforms leverage a feed to present users with the information they’re looking for based on their profiles and preferences.

Twitter provides you with a feed based on the topics and people you follow. But in case you are looking for either a specific topic or person, Twitter provides the ability to search manually — this topic or person of interest then makes its way into your feed algorithm.

Match.com uses a feed to present potential matches based on the information you provided about yourself and your preferred criteria of the person you’re looking to match with. Tinder revolutionized this by introducing the swipe experience to accept or decline matches. Manual searches are not provided as a fallback.

Because product exchange platforms cover a large variety of use cases, these are the laggards depending primarily on the traditional search experience. Depending on the customization of a product (ready-made vs custom products), the search experience depends on filters to narrow down your search or include before searching.

#### Search Algorithm

Information retrieval is a deep topic to explore. However, regardless of the approach, context is key to presenting users with the correct set of results specific to your use case and user intent. For example, the search for pumps on Google vs. the search for pumps on Thomasnet.com — two completely different results for two different types of use cases based on the context of the search.

#### Recommendation Engine

Although users are searching for a specific value unit to solve their problem, they may not be aware that an alternative or better product exists — unless it’s recommended to them.

A recommendation engine is the criteria used to provide suggestions to users, allowing them to discover related value units (content) at the right touchpoint in their user journey. This related content complements what they’re looking for or solves the problem more efficiently.

A well-balanced recommendation engine is an effective tool that helps increase the platform's match value. Unfortunately, because this approach is focused on interacting with users in their most seducible moments, it can be (and is) easily misused.

There's ever-present friction between growing revenue and designing with the user's best interest in mind in information exchange platforms with an advertising-focused revenue model (e.g., social networks that serve ads). The more time consumers spend scrolling, tapping or swiping through content generated by producers, the more revenue generated by advertisers; the fewer restrictions given to advertisers, the more they will spend.

As platform designers, engineers, and managers, the onus is on us to design and build for this balance. Despite simply being a good human being (I believe there are still a few of us around), there’s business value in avoiding dark patterns and maintaining user trust…

#### And visuals… (TBD)

### Users trusting the exchange

After users have found what they’re looking for, they need reassurance that if they proceed with a transaction or exchange of information, the user on the other side will follow through as promised.

Offline, it’s easy, you go to a mall and you try on clothes — you trust that the shirt you just tried on will look the same once you purchase it and wear it outside of the mall. However, with online transactions, things get a bit more complicated because not only are you not able to see the value unit with your own eyes, you’re also dealing with a complete stranger. There’s good reason to be skeptical. So how do you build trust?

#### Reputation Validation by Peers

There’s a reason why Uber emphasizes their rating system — it’s because users want to know from other users how their experience was with this user. A rating system builds trust. A well-designed rating system also gives platform managers the insights necessary to govern their platform and remove users that don’t have good intentions or are a potential liability to the platform brand.

#### Reputation Validation by the Numbers

Users will trust a transaction by someone that has performed this transaction multiple times — in the offline world we call this experience. Depending on the type of platform and the respective business model, sometimes peer reviews and ratings cannot be provided. In cases like these, the platform has the option to let users know how much experience this user has with the respective transaction. Users react to metrics like total completed transactions, average response time, and time on the platform.

#### Reputation Validation by Platform

Platforms can also decide that they will select specific consumers or producers (usually seen on the producer side) that they consider valuable and trustworthy. Although this is intended to promote trust, users have caught on to the fact that most of these approaches are the result of users paying a premium to achieve such status. Depending on the industry, this may promote the intended trust.

In most cases, users also can provide company information, credentials, or certifications that allow them to make a case for themselves. How far the platform goes to validate these claims directly impacts the trust users will have in these claims and the trust of the platform in general.

### Users completing the transaction

Once users are matched and a level of trust is established, it’s now up to the platform to make it as easy as possible for the transaction to take place.

#### Money Exchange

In platforms where money is exchanged, transacting through the platform is preferred by users due to convenience and assurance. If the exchange goes wrong, platforms have safety measures in place that allow for refunds. However, this convenience comes at a price since most platforms take a percentage of the transaction. Unreasonable transaction fees will prompt users to either look for alternative payment methods or alternative platforms altogether.

(Btw, if you’re designing without taking into account user return rates nor revenue generation — you’re probably just decorating.)

#### Information Exchange

Platforms where information is the main exchange, the experience is primarily focused on publishing and communication tools. Social media platforms, where the information exchange is one-to-many, heavily emphasize the tools necessary for producers to create/publish content and consumers to view, like, comment on, and share this content.

Relationship-building platforms, where information exchange is one-to-one, primarily rely on direct communication tools (e.g. messaging). Because of the intimate interaction, the ideal experience is designed around privacy and security.

The goal here is to leverage the initial exchange as an entry to provide the tools and services to maintain that relationship.

## Designing for Repeat Usage & Growth

After an initial transaction, users are now familiar with your platform — they can make an informed decision on whether they’ll be coming back or go elsewhere. There are two main reasons why users will come back: 1) they want to repeat the core transaction; or 2) they want/need to use your value-added services.

### Repeating the core transaction

The biggest impact on whether users will continue to use a platform is how they felt about the initial transaction. Because users completed a transaction doesn’t mean they were happy with the experience.

#### Was the value unit delivered?

No second chances here, if the consumer received radio silence after they’ve paid, they will not be using your service again. It’s now up to the platform to make sure a refund is provided to avoid further brand damage.

#### Was the value unit delivered on time?

We’re living in a time where users are expecting instant satisfaction. If they order a product, they expect Amazon’s 2-day delivery. If they requested a service, they expect the real-time status provided by Uber.

#### Did the value unit meet the expectations set through the platform?

If a user ordered a pizza, expecting a pie, and only received a slice — they probably won’t be trusting your service again regardless of the why.

Platforms often make the mistake of depending on the exclusivity of their platform's audience and technology. If there’s enough demand, a competing platform will appear with a better end-to-end user experience.

_Relevant case study: Apple vs Blackberry_

### Re-engaging with supporting services

You now have a flawless core transaction experience that exceeds user expectations — however, users aren’t coming back to re-engage with your platform. If you’re in an industry where frequent usage is expected from users (e.g., ride-sharing within a busy city), I recommend you go back to the drawing board because your initial transaction is far from flawless.

However, you might find yourself in an industry where the re-engagement cycle is either longer or not expected at all. In these industries, it is crucial to provide supporting services & tools that maintain users on your platform.

[Linkedin’s largest revenue stream comes from recruiting services](https://digital.hbs.edu/platform-digit/submission/linkedin/) — matching organizations with potential employees. After a match is made, both the organization and the employee remain on LinkedIn because of the additional services, tools, and opportunities the platform provides. These opportunities include employees being exposed to related job openings and organizations being exposed to new talent. This organically creates motivation for organizations to work towards retaining talent and for talent to work towards being retained.

There are a unique set of b2b platforms that focus on building long-term relationships between organizations. Take for example Thomasnet.com, a platform where industrial buyers find industrial suppliers that can be confidently integrated into their supply chain. Some of the relationships built on this platform can last for years if not decades. But unlike matching humans, these relationships aren’t meant to be monogamous.

Once a match between two organizations has been made, it could be years before a need to use a b2b matchmaking platform appears. By the time this need arises again, they have either forgotten about where they found their original suppliers or came across another tool that to actively use to find their match.

Providing tools to maintain and facilitate the long-term b2b relationship is key for re-engagement. E.g. payments, order management, communication, etc. Adjacent markets can also be leveraged to keep users engaged. For example, these platforms may already have the audience necessary to provide talent acquisition-related features throughout their experience.

Similar to LinkedIn, if both organizations remain on the b2b platform, they’ll be exposed to similar opportunities. For suppliers, you’ll continue to be exposed to buyers looking for what you offer, for buyers, you’ll continue to be exposed to suppliers that can provide what you need, possibly more efficiently.

### When no-repeat use is intended

Hinge’s current tagline is “The dating app designed to be deleted.” If Hinge is successful at matching two users, they will not re-engagement. If users do re-engage, this is a sign that Hinge failed at an initial successful match.

This isn’t unique to Hinge, this is something that all relationship-matchmaking platforms are aware of. But because the number of adults entering the long-term relationship phase in their lives is indefinite, these platforms are able to survive on a business model where success leads to no re-engagement.

There are ethical and moral issues at play if platforms like Hinge designed an experience optimized to repeat the core transaction after a successful match. Nonetheless, it is possible to design for re-engagement without selling your soul.

Long-term relationships are inherently complicated — even the most successful ones. After a dating app like Hinge is deleted, there is an opportunity for these platforms to re-engage with the tools and services necessary to help maintain a healthy relationship. E.g. An app like Relish goes hand-in-hand with an app like Hinge.

(Note, it’s probably not a good idea to provide these services & tools within the same platform where users are a click away from finding a new relationship.)

### Disintermediation TBD

## Tracking Success with Metrics that Matter

Historically at Thomas, we measured platform success by the number of times a buyer contacted a supplier. On paper, RFIs sent made sense — after all, our job is to match buyers with suppliers. We laser-focused on this metric and more than doubled our monthly RFI submissions over the course of two years. However, this did not have a direct impact on revenue. We were focusing on the wrong metric.

We were tracking the success of a multi-sided platform in the same way that a single-sided business would track success using a single-sided traditional funnel approach. Even worse, we didn’t have the communication tools necessary on the platform to track and understand whether these RFIs were being answered by the suppliers. Tracking RFIs sent was the equivalent of a waterpark measuring success by the number of visitors it sends down a water slide. Whether they made it down safe or not, we weren’t sure.

The true success metric of any platform is revenue. However, in order to scale a platform effectively, it is critical, if not more important, to identify the platform engagement metrics that could give us the “x to sales” conversion rate.

### Successful Matches

A multi-sided platform delivers value to its users when a successful match is made between producers and consumers (buyers and sellers). To build on my previous analogy, a water park delivers value when a visitor goes down a water slide and arrives safely in the wading pool.

The successful match metric plays two important roles:

1. It’s the leading indicator of revenue generated by a platform — it’s the metric that gives us the elusive conversion rate to sales (successful matches to sales conversion rate).
2. It’s the single most important metric of how a platform is performing — traffic and active users do not hold any value if users are not successfully matching.

For product and service exchange platforms, defining a successful match is straightforward — a successful match occurs when money is exchanged for a product or service. The match quality can be gauged by the rating users give; assume a successful match unless a low rating is given by either user in the exchange.

Because of the nature of Information exchange platforms, determining a successful match tends to be more subjective and specific to the platform. For example, dating platforms could decide that a successful match is when two users connect with each other and delete the app. But would they still consider that a successful match if one or both of the users resubscribe to the platform a few months after? What about 5 years later?

On the other hand, social networks and other one-to-many platforms depend on a culmination of micro-interactions throughout their experience. Because the revenue model of these platforms is primarily based on advertising, the go-to metric of success tends to be active users. However, this broad metric fails to provide any insight that will lead to the sustainable growth of a platform. This metric becomes even more dangerous when it’s used to incentivize product managers and marketers. It’s simply an easy metric to manipulate.

Pinterest’s growth team realized the issue with using active users as their success metric early on:

> “I remember at Pinterest, at one point our growth team decided that the metric that they were going to base their success on, their OKR, was monthly active users … It’s a shame when you’re focused on the wrong things. When the growth team realized this and ended up changing their OKR to be what we called weekly active pinners—actually making someone who signs up for Pinterest not just come to the site once in a month—but pin something once in a week, their entire roadmap changed and we were able to make the people that we were signing up far more successful and happier and better long term engaged users.“  
> — Sarah Tavel, Founding PM at Pinterest, The Knowledge Project Ep. #113

A true successful match metric is determined by the balance of user & business value delivered contingent on the purpose of the platform with a direct correlation to revenue.

### Audience Interactions

Similar to how successful matches give us the conversation rate to revenue, audience interactions give us the conversion rate to successful matches. An audience interaction is when users from either side of a platform interact either directly or indirectly with users from the other side with the intent to match.

For example, buyers on Thomasnet.com are able to view videos of the products and services offered by suppliers listed on the platform. Although a video view cannot be considered a successful match, it is an indirect interaction between a buyer and the content of a supplier that can give us the probability of a buyer taking the next steps in contacting the supplier.

On product exchange platforms, an audience interaction is when a buyer views, saves, or adds a product of a seller to their shopping cart. On-demand service exchange platforms (e.g. Uber, Airbnb, TaskRabbit), tend to limit the interactions until the match has been made. However, these are still strong indicators of whether a match will end with a completed transaction.

Not all audience interactions hold the same weight when determining the conversion rate to a successful match. These metrics should be broken out to a set of metrics specific to the purpose of the platform.

### Active Users

In the traditional sense, active users represent the number of visitors a website or app received during a given period of time (e.g., monthly active users). It’s a critical metric that serves as the leading indicator of audience interactions and, depending on the business model of a platform, revenue. However, using a single-sided metric to measure the activity of a multi-sided platform neglects the complexities introduced by the network effect.

#### Active Buyer to Seller Ratio

For example, let’s say we have 1,000 active buyers on a platform during the span of a week. We know the average spend of each buyer during the span of a week is about $50. This leaves us with an average spend of 50k a week from our buyer base. For traditional pipeline or single-sided businesses, this is straightforward, growing our active buyers will lead to growing revenue.

Let’s introduce the seller into the equation. During the same time period, we have 100 active sellers on a platform. Distributed evenly (for the sake of simplicity), each supplier ends up with $500 of the $50k produced by the buyers. This tells us that for every 10 buyers, 1 supplier generates $500 of revenue.

If the platform charges a 3% transaction fee, we now know that 1,100 monthly active users with a 10:1 buyer to seller ratio generates $50k in transactions resulting in $1,500 of revenue generated by the platform. If the ratio of 1,100 monthly active users changes to 9:2, these numbers change to $45k in transactions and $1,350 in revenue.

#### The Reality of Growing Active Users

Because of the network effect of a platform, growing the number of quality sellers will attract more qualified buyers (and vice versa). However, unchecked growth on either side results in a negative network effect.

If we grow the number of active sellers, each seller will now receive a smaller piece of the pie. By increasing the number of active sellers by 100, we’re looking at 1,200 monthly active users with a 5:1 buyer to seller ratio. Although transactions and revenue stay the same, each seller now generates $250 a week instead of the original $500. If sellers are seeing little value, they will take their business elsewhere.

Only growing the number of active buyers, a platform will reach a point of infliction where sellers won’t be able to meet demand effectively. This will result in either a drop in quality of the delivered product/service or a base of suppliers that cannot fulfill. Buyers will be left with no other choice but to buy through a competing platform.

The reality is that a platform will never hit the brakes on a growing user base — nor should they. The best that can be done is to keep track of the active user ratio and increase the user acquisition budget of one side if the other side is experiencing exponential growth. However, the trick to getting the correct balance is measuring user trust and happiness.

### User Trust

> Trust refers to the degree to which users of a platform feel comfortable with the level of risk associated with engaging in interactions on the platform.  
> — Platform Revolution: How Networked Markets Are Transforming the Economy - G. Parker, M. Van Alstyne, S. Choudary

The more that users trust your platform, the more likely they will continue to engage and recommend to others. Well-defined and collected user trust metrics give the additional context necessary behind the conversion rates across all touchpoints of a platform.

For example, if we’re analyzing the performance of a company profile page/template, part of what we look at is the conversion rate to contact (what percentage of total company profile visitors went on to contact a supplier). A conversion rate of 20% gives us no indication of whether that’s a good or a bad number.

If along with a 20% conversion rate, we also know that user trust in the company profile page is an average of 1.8 out of 5. Along with ratings, users are also given the option to provide comments. We now have better context toward the company profile’s conversion rates to contact. Now, this won’t tell us the full story, but it gives us a better starting point to optimizing a platform’s overarching experience.

## To conclude

I set out to share the knowledge of platform design that I’ve accumulated over the past few years as the head of design of one of the oldest multi-sided platforms in the world. Little did I know that a run-of-the-mill article would turn into a 5,000-word monster.

## Resources

### Books

- [Platform Revolution: How Networked Markets Are Transforming the Economy―and How to Make Them Work for You](https://www.amazon.com/gp/product/0393354350/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0393354350&linkCode=as2&tag=juliangav-20&linkId=054bc6f525d36bd68429746f8cf4fb48)
- [The Business of Platforms: Strategy in the Age of Digital Competition, Innovation, and Power](https://www.amazon.com/gp/product/0062896326/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0062896326&linkCode=as2&tag=juliangav-20&linkId=faca37b87903b6ecf13e4659a7685191)
- [Matchmakers: The New Economics of Multisided Platforms](https://www.amazon.com/gp/product/1633691721/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1633691721&linkCode=as2&tag=juliangav-20&linkId=295fc24e906d88e72ec99f6f623a351d)
- [Modern Monopolies: What It Takes to Dominate the 21st Century Economy](https://www.amazon.com/gp/product/1250091896/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1250091896&linkCode=as2&tag=juliangav-20&linkId=55c5f260fdc608108f45f0934dfc256f)

### Articles

- https://hbr.org/2018/09/alibaba-and-the-future-of-business
- https://community.growthhackers.com/posts/airbnb-the-growth-story-you-didnt-know
- https://online.hbs.edu/blog/post/what-are-network-effects
- https://www.forbes.com/sites/quora/2016/07/26/where-and-when-did-yahoo-go-wrong/

### Other

- https://twitter.com/davidsacks/status/1126901492235948032
