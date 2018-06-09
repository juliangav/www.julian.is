---
title: "Setting Up Server-Side A/B Testing for Static Websites"
description:  From team buy-in to fallbacks, here's the approach we took at Thomas with the implementation of CSS Grid.
tags: [abtesting, staticwebsites, jamstack]
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

I've been playing around with idea of shifting my A/B testing approach from the client-side to the server-side for the sake of performance. Having my website hosted at [Netlify](https://www.netlify.com), I realized that they make it pretty easy to setup server-side testing through branch deployment via [Git](https://git-scm.com/). 

With the help of Google Tag Manager and Google Analytics, I went ahead and took it for a test drive.

<h3>What I used for this setup:</h3>

* [Hosting at Netlify](https://www.netlify.com) (free personal accounts) 
* [Hugo Static Site Generator](https://gohugo.io/)
* [Version Control via Git](https://git-scm.com/)
* [Google Tag Manager](http://www.googletagmanager.com/)
* [Google Analytics](https://analytics.google.com)

<h2>Setting up branch split testing via Netlify</h2>

Once you get [setup with an account at Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/) and you're deploying via Git, navigate over to the split testing page from the admin's main nav. You'll get prompted to activate split testing, click 'activate'. Once activated, you'll be presented with the controls for your split test. 

<figure>
	<img src="/assets/netlify-split-test-controls.jpg" alt="Netlify's split test controls">
	<figcaption>Netlify's split test controls</figcaption>
</figure>

If you're not seeing any of your other branches here or you're getting the <i>This feature requires a repository with at least 2 branches</i> error, check your Build &amp; Deploy settings and make sure that branch deploys are set to <i>all</i>. 

Pick your branches that you want to test against, set the amount of traffic you want to send to each branch, and start your test. All traffic to your website is now being split into the branches you've chosen. The split is happening at the CDN level which means the front-end/client-side isn't taking a performance hit. 

<h2>Setting up Your Analytics Dashboard</h2>

Now that we're all set with splitting traffic to the respective branches, we need to figure out a way to track how each variation is performing — I'll be using Google Analytics (GA) for this.

<h3>Step 1: Create a custom dimension in Google Analytics to segment traffic</h3>

In GA you're going to create a custom dimension that will allow for you to segment traffic to both variations. Do this by going to settings > Custom Defintions > Custom Dimensions. 

<figure>
	<img src="/assets/ga-custom-dimension.jpg" alt="Google Analytics Custom Dimension"  class="img-border">
	<figcaption>Google Analytics Custom Dimension</figcaption>
</figure>






<h3>Step 2: Create Data Layer Variables in Google Tag Manager</h3>


(If you're using GA without GTM, [you can follow these instructions instead](https://developers.google.com/analytics/devguides/collection/gtagjs/custom-dims-mets) and skip to step 3.)

<!-- Since I'm using GTM, we need to perform an extra step that allows us to connect the custom dimension to our branches. 

Now that we have our dimensions created through Google Analytics we need to figure out a way to to assign the branch name as a dimension value. If you're using GA without GTM, the initial setup of assigning a dimension value on a page is quite simple and [thoroughly explained here](https://developers.google.com/analytics/devguides/collection/gtagjs/custom-dims-mets).  -->

Since I'm using GTM, we need to perform an extra step that allows us to connect the custom dimension to our branches. You're going to <a href="/assets/google-tag-manager-create-data-layer-variable.jpg" class="lightbox">create a User Defined Data Layer Variable</a> and <a href="/assets/google-tag-manager-add-custom-dimension.jpg" class="lightbox">assign it to your GA Tags as a custom dimension</a>.


Google provides a [detailed step by step approach](https://support.google.com/analytics/answer/6164990?hl=en) for this (skip to the  <i>Using the Data Layer</i> section on the second-half of the page).


<h3>Step 3: Assign branch name as dimension value</h3>

You'll need to assign a dimension value to each individual branch in order to segment the traffic through GA. To avoid doing this manually, I'm going to use a variable that Netlify provides which outputs the branch name upon deployment:

<pre class="language-markup"><code>{{ getenv "BRANCH" }}</code></pre>

Combining this with the Data Layer variable you created in GTM, you'll get the follow snippet which needs to be placed before your GTM tracking code:


<pre class="language-markup"><code>&lt;script&gt;
  dataLayer = [{
     'branchName': '{{ getenv "BRANCH" }}'
  }];
&lt;/script&gt;</code></pre>

Triple check that this is placed before your GTM code and not after. If it's placed after, it will disabled your entire tracking (not cool, Google).


Once this is set and deployed to the respective branches, you'll need to create segments in GA for each custom dimension value of the respective branch/variation. You'll now have access to all of GA's insights for each variation.

<h2>Calculating Statistical Significance of Results</h2>

One of the awesome things about the A/B testing platforms available is that they provide this for you in their setup — since we're putting the dashboard together ourselves, this is something that we'll need to figure out on our own. 

Pick the metric that's going to determine the winner of the test and plug it into any of the following calculators:

* [https://abtestguide.com/calc/](https://abtestguide.com/calc/)
* [https://vwo.com/ab-split-test-significance-calculator/](https://vwo.com/ab-split-test-significance-calculator/)
* [https://www.kissmetrics.com/growth-tools/ab-significance-test/](https://www.kissmetrics.com/growth-tools/ab-significance-test/)

<h2>Final Thoughts</h2>

That's pretty

