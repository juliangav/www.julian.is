---
title: "Setting Up Server-Side A/B Testing for Static Websites"
description:  From team buy-in to fallbacks, here's the approach we took at Thomas with the implementation of CSS Grid.
tags: [CSS, CSSGrid,]
lastmod: 2018-03-01
date: "2018-03-25"
time: 5 Minutes
categories:
  - "Development"
slug: "server-side-split-testing-for-static-websites" 
images: ["assets/og-css-grid-at-scale.jpg"]
icon: /assets/aico-css-grid-at-scale.svg
comments: false


---


We've been playing around with idea of shifting our A/B testing approach from the client-side to the server-side for the sake of performance. 

<!-- In client-side A/B testing, variations are loaded and traffic is split through a script which manipulates the DOM before the user sees anything. In server-side A/B testing, all of these decisions are made directly on the server before anything gets delivered to the user.

In regards to performance, server-side A/B testing is the clear winner. But unfortunately server-side testing also ranks pretty high on the complexity scale.  -->

Having my website hosted at [Netlify](https://www.netlify.com), I realized that they make it pretty easy to setup server-side testing through branch deployment via [Git](https://git-scm.com/). With the help of Google Tag Manager and Google Analytics, I went ahead and took it for a test drive. It took me about an hour to set this up while I figured stuff out.

<h3>What I used to set this up:</h3>

* [Hosting at Netlify](https://www.netlify.com) (free personal accounts) which provides the server-side split testing functionality.
* [Version Control via Git](https://git-scm.com/) to use branches as your variations.
* [Google Tag Manager account](http://www.googletagmanager.com/) for capturing dataLayer events.
* [Google Analytics account](https://analytics.google.com) as your analytics dashboard.

<h2>Branch Deployment Setup</h2>

<h2>Setting up Your Analytics Dashboard</h2>

<h2>Calculating Results</h2>
