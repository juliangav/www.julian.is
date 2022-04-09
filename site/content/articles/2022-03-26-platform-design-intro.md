---
title: "A Designer's Intro to Multi-Sided Platforms"
description:
tags: [MultiSidedPlatforms, ProductDesign, UXStrategy]
lastmod: 2022-03-1
date: "2022-03-26"
time: 5 Minutes
categories:
  - "Design"
slug: "intro-to-platform-design"
images: ["assets/og-pragmatic-design-principles.jpg"]
icon: /assets/aico-pragmatic-design-principles.svg
comments: false
---

Since I wrote my last article, things changed a bit. We went, and continue to go, through a pandemic that has permanently disrupted our daily lives — some for the better, most for the worst. However, with every pandemic comes innovation and collective self-reflection (or so I’ve heard). Over the past two years, we've realized how critical the ever-present digital platform is to our survival as a species.

Take, for example, the platform I dedicate most of my energy towards, Thomasnet.com. During the height of the pandemic, we created an emergency response system that connected manufacturers providing products or materials related to the mass shortage of critical supplies with front-line organizations in need of these supplies.

As we begin to get back to normal, I've decided to share what I've learned at the intersection of product design & multi-sided platforms while spearheading product & design for Thomas. I plan the keep the individual sections of this article brief since the topics I cover can quickly expand into a series of books.

## What's a Multi-Sided Platform?

A multi-sided platform (MSP) is a digital, and sometimes physical, a place that enables the exchange of information, goods, or services between sellers/givers and buyers/takers. Uber, for example, is a platform that enables the connection between a person without a car needing a ride and a person with a vehicle able to provide this ride.

Contributing to the popularity of platforms is the decentralization of the service & product suppliers. Airbnb is the largest lodging provider in the world, yet they do not own a single property. The endless array of inventory makes it extremely difficult, but not impossible, for the traditional pipeline business to compete.

Nevertheless, multi-sided platforms have been around for some time. Thomasnet.com, for example, has been around since 1898. Their focus a century ago is the same as today, connecting industrial buyers with industrial suppliers. However, they did this via heavy physical books distributed across the United States.

Platforms have gained immense popularity over the last decade because of the real-time and on-demand service exchange enabled by the supercomputers we carry around in our pockets — which, technically, are also platforms.

Before we jump into the different types of platforms, let's first establish a shared understanding of the integral parts of a platform.

## The Network Effect

According to Geoffrey Parker and Marshall Van Alstyne in [Platform Revolution](https://www.amazon.com/gp/product/0393354350/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0393354350&linkCode=as2&tag=juliangav-20&linkId=054bc6f525d36bd68429746f8cf4fb48), the network effect is the impact the number of users a platform has on the value created for each user. The more compatible users a network has, the more valuable a platform becomes for each of its users. This is the main differentiator between traditional pipeline businesses and multi-sided platforms.

David Sacks, cofounder of Yammer, famously tweeted the following napkin sketch illustrating Uber’s network effect:

(napkin sketch)

The value active suppliers on Thomasnet.com have is based on the number of active buyers on the platform. Growing our buyer base increases the value for our suppliers and vice versa. This is commonly referred to as a **cross-side network effect**. However, only growing suppliers means that each supplier gets a smaller piece of the pie. Only growing buyers means there is less supply available. This is known as a **same-side network effect**.

Balanced growth between the two sides of a platform leads to a **positive network effect** where the value created leads to exponential growth. If unchecked growth takes place or if too many unwanted users join a platform (e.g., spammers), a platform may see the results of **negative network effects**.

One of the bigger mistakes I’ve witnessed organizations make is designing and growing multi-sided platforms with a single-sided approach. And to be fair, that’s where the majority of our collective experience stems from. Every design decision made on a platform needs to take into consideration the respective network effects. If there’s any concept you should retain from this article, let it be this.

## Common Components of a Multi-Sided Platform

### Value Unit

The information, goods, or services exchanged on the platform. The value unit of OpenTable is a reservation at a restaurant, a booking for Airbnb, a ride for Lyft, etc. Compared to the traditional pipeline business, platforms do not carry the responsibility of directly producing the value unit.

### Users

Participants in the exchange of information, goods, or services enabled by the platform. Users are mainly categorized as producers, users that create the value unit; consumers, users in need of the value unit; and partners, who join the platform to provide additional value to producers and consumers (usually for a premium).

### Matchmaking Tools

Tools provided by the platform which facilitate the match between the right users and enable the respective transaction. These could be as simple as a search filter that lets you narrow down the results of what you're looking for or as intricate as a recommendation engine with a sophisticated algorithm that knows what you're looking for.

### Multihoming

When producers and consumers participate in competing platforms simultaneously. It's common for a driver to be working both Uber and Lyft apps simultaneously, selecting the rides with the best rates — same with riders. For this reason, the user experience of a platform is more critical than ever.

### Core Transaction

The successful exchange of the value unit between producers and consumers (interchangeably referred to as core interaction). From a business perspective, the sole purpose of a platform is to enable and monetize the core transaction.

## Types of Multi-Sided Platforms

The industry has largely agreed on the four main types of platforms below. While the function remains consistent (enabling the exchange of value units between producers and consumers), the value unit & users vary considerably across different platform types. This variation largely influences how we design the critical matchmaking tools.

### Product Exchange Platforms

The most common platform type enabling producers to sell products to consumers. Yup, the Amazons, Ebays, & Etsys of the world and digital counterparts to malls. Measuring the matchmaking success of these platforms is straightforward since there's a monetary transaction that takes place when a match is made.

### Service Exchange Platforms

Platforms focused on enabling the match between a consumer looking for a service and a producer with the ability to provide that service. Taskrabbit, for example, is a platform that matches users needing miscellaneous tasks done with local freelance labor looking to perform these tasks.

Similar to product exchange platforms, a monetary transaction measures the matchmaking success of these platforms. However, because repeat transactions are more common, there's a larger dependency on user satisfaction post transaction — usually measured through ratings paired with user feedback.

### Information Exchange Platforms

These are platforms that enable the exchange of information between an interchangeable group of producers and consumers with the purpose to inform, entertain, or create a relationship. These platforms vary from social networks (e.g., Facebook, Instagram, TikTok, etc.) to relationship-building platforms of Match.com & Tinder and everything in between.

Because the core transaction in information platforms doesn't include a direct monetary exchange between users, matchmaking success becomes a bit more complicated, but not impossible, to track.

Most social networks depend on the size of their active user base to attract high-paying advertisers (the "partners"). While relationship-building platforms depend on paid user subscriptions to be matched with other users.

### Technology Platforms

(gaming consoles, smartphones, etc)

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
