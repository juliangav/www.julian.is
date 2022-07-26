---
title: Re-Inventing ROI Reporting for Thomasnet.com
description:  Transformed how Thomasnet.com reports ROI to premium suppliers by designing and leading product efforts of their Supplier Analytics Dashboard.
preview_text:  Overhauled how Thomasnet.com reported ROI to premium subscribers with the design of an ROI reporting dashboard unique to the industrial matchmaking process.
tags: [Product Design Lead, Data Visualization, Stakeholder Management]
slug: "supplier-analytics-dashboard"
layout: default
featured_image: /assets/supplier-analytics-featured-image.jpg
featured_video: /assets/supplier-analytics-featured-video
thumbnail: /assets/thumb-supplier-analytics.png
date: "2022-01-15"
weight: 1
---

<div class="container--sm pb-0">
    

Thomasnet.com is the leading industrial sourcing platform with a monthly active user base of over 1.7 million buyers and suppliers. The company primarily relies on a premium subscription revenue model for suppliers while allowing buyers to use the platform free of charge.

Part of the work to create a unified user and company account experience for Thomasnet.com included a complete rebuild of the ROI tools for premium suppliers. A high-stakes feature that would transform ROI reporting and become the primary upsell driver for one of the most known brands in the industrial B2B space.

## Getting Familiar with the Problem

 An [information exchange platform](/article/platform-design/#information-exchange-platforms) with a revenue model based on exposure, Thomasnet.com's legacy ROI reporting tools focused on the number of views the supplier received on the platform and who viewers were. 
 
 </div>
 <div class="container pb-0">
 {{< figure src="/assets/sa-legacy-dashboard.png" title="Legacy Dashboard" class="project__visual">}}
</div>
 <div class="container--sm pb-0">

 The problem with this approach is we set ourselves up to compete against Google in a lopsided numbers game. In reviewing feedback from non-renewals, the number one reason suppliers left Thomas was Google. 
 
Through a combination of Google Ads and SEO, most suppliers saw more referral traffic to their site at a lower cost. Technically, this is true, not just for Thomasnet.com but for any information exchange platform agnostic of industry.


However, the quality of traffic from Thomas was significantly higher, with visit-to-contact conversion rates of around 4% vs. 0.95% from Google. And unlike Google, we could provide buyer-intent information at a company level — the number one reason suppliers renewed.
<!-- 
 Regardless, Google left some folks in the organization asking the the existential question of "is Thomasnet.com worth it?" (spoiler: it is) bringing major challenges with the level of transparency and autonomy we aimed to provide.  -->

 ### The Objective

 The primary objective was to streamline ROI reporting by creating a unified and scaleable experience within the newly established Thomas Account and sunsetting the suite of disparate legacy reporting tools and processes. 



For the business, the ROI dashboard needed to focus on the qualitative value that Thomasnet.com brings to suppliers and increase revenue through higher retention and upsell rates.

For users, the objective was to create a seamless user experience that transparently and in real-time communicates to suppliers where they can improve, where they're overcompensating, and what the current and potential ROI is of their investment in Thomasnet.com.
<!-- 

At the time, only premium suppliers had access to legacy reporting and company management tools. The new Thomas Account was designed with a focus on demonstrating value and upselling to Free Suppliers — a focus we needed to include in the new ROI dashboard. -->


### Use cases to solve for

- Premium suppliers accessing their company's real-time analytics on Thomasnet.com to understand their ROI and make decisions on adjusting or increasing spend.
- Free suppliers accessing their company's real-time analytics on Thomasnet.com to understand the potential value of upgrading to a paid subscription.
- Internal staff having a shared understanding, based on a single source of truth, of ROI reporting for Thomasnet.com.



## Discovery, Research, & Insights

With a solid understanding of the problem we needed to solve, we held an initial design kickoff where we identified the questions that needed to be answered, who the stakeholders were, and the respective team leads.



</div>
 <div class="container pb-0">
 {{< figure src="/assets/sa-questions.jpg" title="Kickoff Questions" class="">}}
</div>
 <div class="container--sm pb-0">


We immediately went to work by speaking to the folks around the organization that dealt directly with premium subscribers.

Our internal sales team had valuable insight into the narrative during upsell calls. We discovered that along with the legacy dashboard, we also manually prepared a Program Highlight Report focused on the companies that had interacted with them and what the interactions were. The sales team noted that this report was usually the deciding factor when getting suppliers to renew.


We also had an in-house agency department that offered marketing services to industrial manufacturers. This uniquely positioned us to get first-hand feedback from one of our target audiences — marketing agencies. We were able to access custom dashboards the team prepares for clients to show progress as a result of their marketing efforts. We also learned what they found helpful from our current reporting and what wasn’t working.

And we went straight to the users. With a combination of existing feedback provided by our customer success team and preliminary user tests with the existing dashboard, we had a baseline understanding of what users were expecting.



## Designing the Information Architecture & Wireframes

<!-- ## Information Architecture & Wireframes -->

We decided to start with a baseline information architecture focused on a centralized dashboard that lives under the Thomas Account. We needed to branch out into details about the companies that viewed the supplier, details on users engaging with their uploaded assets, and information on their paid campaigns.

 </div>
 <div class="container pb-0">
 {{< figure src="/assets/sa-ia.png" title="Baseline Information Architecture" class="">}}
</div>
 <div class="container--sm pb-0">

We were also careful not to create an information architecture that forced a specific user experience. Whether we presented the child items as information on the dashboard, or separate pages accessed through the navigation, we would make the necessary design decisions as we become better informed.

Based on this information, we went to work on designing the initial wireframes of the dashboard:


</div>
 <div class="container pb-0">
{{< figure src="/assets/sa-early-dashboard-2.png" title="First stab at a simple reporting dashboard" class="project__visual">}}
</div>
 <div class="container--sm pb-0">

> Working with black and white mockups allowed us to iterate quickly with existing design assets & components while communicating that this was not intended to be a high-fidelity mockup.

We skipped on a primary graph common with most dashboards. Instead, we dedicated more screen real estate to the qualitative data while still surfacing the quantitative metrics that marketers expect.

Instead of sorting companies by date, we introduced the concept of a temperature gauge. The intent was to introduce a formula that would surface the companies with the most interest based on engagement level, recency, & relevance.

After a round of user tests and stakeholder reviews, we were made aware that what we had was still falling short in enticing users to renew. We brainstormed with the data team, and after a few iterations, we came up with the following:

</div>
 <div class="container pb-0">
{{< figure src="/assets/sa-early-dashboard-4.png" title="Final Low-Fidelity UI" class="project__visual">}}
</div>
 <div class="container--sm pb-0">

We introduced a column of graphs meant to give suppliers context to where they stand and where there’s room for improvement compared to the total market on Thomasnet.com. Spot-on for upselling.

We also added a row of components that displays the most engaged assets, videos, and campaigns. Since this is premium content for suppliers, the game plan was to leverage the empty states to upsell.

After a final round of user validation, we now had the information architecture and hierarchy of the dashboard where we felt confident to move forward.


## High-Fidelity Designs & Prototyping

By this point, stakeholders in the organization had seen the low-fidelity mockups and a level of consensus was generated. One of the significant benefits of working with early black and white mockups is that you’re able to progress on the high-fidelity designs simultaneously.

We picked up where we left and began to design the visual details of the dashboard. 



</div>
 <div class="container pb-0">
{{< figure src="/assets/sa-high-fidelity-dashboard.png" title="Initial High-Fidelity UI" class="project__visual">}}
</div>
 <div class="container--sm pb-0">

We wanted to create a color scheme that communicated a level of urgency and importance when layered on top of our branding. This would contribute to a higher response rate. To test this out, we chose a traditional cool-to-warm color scheme.
 
 However, the orange and reds clashed with our brand’s green and cyan. While orange and red represented warm and hot, it was also the colors we used for platform warnings and errors.

With this in mind, we iterated towards a more cohesive visual design:

 </div>
 <div class="container pb-0">
{{< figure src="/assets/sa-high-fidelity-dashboard-2.png" title="Initial High-Fidelity Dashboard UI" class="project__visual">}}
</div>
 <div class="container--sm pb-0">

We ditched the orange and reds and instead doubled down on our brand colors to communicate the level of urgency and importance across components. We were confident with this decision since we already did this with our call-to-actions throughout the platform.

We introduced two stacked horizontal bar graphs in place of the pie chart in Activity by Market. Unrelated to my disdain for pie charts, this section needed to communicate two different data points (sessions and leads) for a better narrative without taking up additional screen real estate.

Concurrently, we were designing the company detail screen based on the decisions that we made on the dashboard:

 </div>
 <div class="container pb-0">
{{< figure src="/assets/sa-high-fidelity-company-detail.png" title="Company Detail UI" class="project__visual">}}
</div>
 <div class="container--sm pb-0">

<!-- The purpose of this screen was to communicate the engagement details of this company with the user's company (the supplier). The experience consists of three primary components:

- The modal header which surfaces the respective company information as well as a date picker controls; 
- The summary metrics of the interactions this company took with the user's company;
- And a timeline of the different interactions.

We decided on a modal approach since this would make it easier for the user to briefly switch between companies without leaving the dashboard. -->

The purpose of this screen was to communicate the engagement details of this company with the user's company (the supplier). 

The experience consists of three primary components: 
- The modal header which surfaces the respective company information as well as a date picker controls; 
- The summary metrics of the interactions this company took with the user's company; 
- And a contextual timeline of the different interactions.

We decided on a modal approach since this would make it easier for the user to briefly switch between companies without leaving the dashboard — insight gathered from how users interact with companies in our search results.


 </div>
 <div class="container pb-0">
{{< figure src="/assets/sa-prototype.png" title="Prototype Tooltips" class="project__visual">}}
</div>
 <div class="container--sm pb-0">


 Since self-service and supplier autonomy was one of the key focuses of the dashboard, we provided contextual tooltips for every component on the dashboard and made this an integral part of the prototype.
 
 <!-- Each tool tip concisely communicated what the component was followed by a link to the help center section for a deeper explanation and information on how to improve the respective metric. These were to play a critical role on the intuitiveness of the dashboard and upsell experience.   -->

 ## User Testing & Iterations 

 <!-- It was now time to put this in front of real users to understand whether users interpreted the design as we intended and if we were in a place to move on to building the UI. according to the objectives and use cases. -->

 We now had a working prototype with the interactive key features ready to user test. There were two overarching questions that we needed to answer to inform the decision of when we could begin building the front-end:

 1. Is the design interpreted by users as intended according to the key objectives?
 2. What insights and gaps can we identify to iterate and improve on the current design?

With that in mind, we went to work with formulating a test plan and launching our initial test through Usertesting.com — a platform we leverage to automate, democratize, and include user research & testing in every phase of our design process.
 
 
<!-- <figure class="project__visual">
 <video poster="/assets/supplier-analytics-featured-image.jpg" autoplay="" class="" muted="" loop="">
          <source src="/assets/sa-perceived-value-user-test.mp4" type="video/mp4">  
      </video>
</figure> -->


 </div>
<div class="container pb-0">
    <div class="project__featured-asset-wrap">   
        <video controls class="project__featured-video" muted loop >
        <source src="/assets/sa-perceived-value-user-test.webm" type="video/webm">  
        </video>
    </div>
    <figcaption class="figcaption">
        <h4>First Round Sample of User Testing</h4>
    </figcaption>
</div>
 <div class="container--sm pb-0">


After the initial round, users unanimously appreciated buyer information, interest/temperature gauge, & top competitor information. Oh, and they were digging the color scheme.

Marketers were explicitly interested in expanding summary metrics — something we hypothesized would be the case but decided against to avoid competing with Google and focus on the qualitative aspect.

Users on the sales side were specifically interested in prospect information and sales conversion data. A few claimed they would use this as a prospecting tool. A use case we initially didn’t plan for but seemed to fit with the overarching purpose.

Although users mentioned their appreciation for top competitor information, a few also noted how it would be helpful to understand how they compared vs. their top competitors. They asked for information we provided with the Market Share and Sourcing Activity graphs — it just wasn’t clear to them.

With this in mind, we iterated:

 </div>
 <div class="container pb-0">
{{< figure src="/assets/sa-high-fidelity-dashboard-3.png" title="Iterations after Initial User Test" class="project__visual">}}
</div>
 <div class="container--sm pb-0">

To better communicate to users the purpose of the right-hand graphs, we updated the titles to be more contextually relevant and introduced subtext to highlight the top competitor aspect.

For a few users, the Identified Audience wasn’t resonating; this led us to optimize the title. We needed the labels of these components to be bullet-proof.

We also focused on increasing the visibility of the help icons across the board by changing the color value from $light-gray to $gray.

We tested again:

 </div>
<div class="container pb-0">
    <div class="project__featured-asset-wrap">   
        <video controls class="project__featured-video" muted loop >
        <source src="/assets/sa-perceived-value-user-test-2.webm" type="video/webm">  
        </video>
    </div>
    <figcaption class="figcaption">
        <h4>Second Round Sample of User Testing</h4>
    </figcaption>
</div>
 <div class="container--sm">

After the second round of tests, users consistently understood the graphs and found the intended value. Seems like we hit the mark.

Users now had more focused feedback on wanting to know how to improve these metrics. A recommendation engine would be the ideal solution, but considering our current resources and timeline, it simply wasn’t the time for this type of feature.

Instead, we layered on the current experience paths for deeper information and ways to increase the respective metric. We worked with marketing to create help center content that included information with a path to upsell.


{{< figure src="/assets/sa-tooltip-improvement.png" title="Including upsell paths within tooltips" class="">}}

Another consistent focus of the feedback was the need for more than 30 days to understand ROI better. We noted this but decided it wasn’t enough to hold us back from moving forward.

We were now ready to begin building the front end. At the same time, software engineering and data science teams were progressing on normalizing data and designing + building the platform’s backend.

## The Reality of Building the Dashboard

Up to this point, most of the work was done via Figma. Not only were we facing the reality of coding what we designed, but every aspect of the dashboard depended on the reality of the data we were working with. 

Although we used real data from early on to lower the surprise, our involvement was still necessary throughout each step of the development process to maintain the integrity of every aspect of the experience. This is where the magic happens.

I'm in the process of putting together this part of the case study. Stay tuned!


</div>