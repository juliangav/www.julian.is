---
title: "Proof that CSS Grid is Ready For Production"
description:  The fact that CSS Grid is ready to use in production is no secret, but here's proof that you could use CSS Grid today.
tags: [CSS, CSSGrid,]
lastmod: 2018-02-18
date: "2018-02-18"
time: 5 Minutes
categories:
  - "Development"
slug: "css-grid-ready-for-production" 
images: ["assets/og-css-grid-ready-for-production.jpg"]
icon: /assets/aico-css-grid-ready-for-production.svg
comments: false


---

Lean close, I’m going to let you in on a little secret: <i>CSS Grid Layout is ready for production… like right now.</i>

Actually, the fact that CSS Grid is ready to use in production isn't really a secret, Rachel Andrew has been [telling us this since July of 2017](https://rachelandrew.co.uk/archives/2017/07/04/is-it-really-safe-to-start-using-css-grid-layout/). She’s even curated a [list of websites that are using CSS Grid in production today](https://cssgrid.design/). 

I know what you're thinking, the majority of the websites listed on that site are tech related with target audiences most likely running a browser with CSS Grid support. Hell, I’m using Grid on this website with zero fallbacks because 99% of my visitors are using supporting browsers. 


But is it ready for the rest of the web which still has a large chunk of its users on browsers without support? Damn right it is.

Late last month we launched the redesign/rebrand of [Thomasnet.com](https://www.thomasnet.com) using CSS Grid — a website that in January alone the website received 100k+ visitors on IE11 (the main culprit of browsers without support).


From team buy-in to implementation and fallbacks, here's the approach we took at Thomas with CSS Grid.

<h3>Table of Contents</h3>

<ol>
	<li><a href="#why-css-grid" class="smooth-scroll">What the hell is CSS Grid</a></li>
	<li><a href="#team-buy-in" class="smooth-scroll">The team's “aha” moment on switching over to Grid</a></li>
	<li><a href="#css-grid-foundation" class="smooth-scroll">Laying the CSS Grid foundation</a></li>
	<li><a href="#css-grid-fallbacks" class="smooth-scroll">Fallbacks for browsers without support</a></li>
	<li><a href="#css-grid-flexbox" class="smooth-scroll">CSS Grid vs. Flexbox</a></li>

	<li><a href="#conclusion" class="smooth-scroll">To conclude</a></li>

</ol>

<h2 id="why-css-grid">What the hell is CSS Grid</h2>

(For all you know-it-alls, <a href="#team-buy-in" class="smooth-scroll">feel free to skip</a> the baseline knowledge stuff.)

CSS Grid Layout is NOT a new framework. It is not a shiny new browser feature that appeared out of nowhere. CSS Grid is a spec which standardizes the approach to layouts on the web — a spec that has been seven years in the making. It's a HUGE reason for designers, developers, and everyone in between to celebrate.

Ironically enough, [CSS Grid was originally proposed by Microsoft](https://blogs.msdn.microsoft.com/ie/2011/04/14/ie10-platform-preview-and-css-features-for-adaptive-layouts/) back in April of 2011. (MS peeps, you guys are doing an awesome job now btw, but some of us old school folk may or may not still be holding a grudge...)


The unprefixed version of the spec was first made available in Firefox, Chrome, and Safari in March of 2017. On October 16 2017, Microsoft finally released Edge 16 with full support — making this the day CSS Grid Layout was officially adopted by all major browsers (I warned you of the irony).




Deciding on CSS Grid was pretty simple: we wanted to build a future proof site with a lean front-end design foundation, leveraging browser-native functionality where possible in order to keep performance & efficiency at the forefront.


I won't bore you with any additional details here, plenty has been written on the web explaining the [benefits of CSS Grid over existing solutions](https://hackernoon.com/how-css-grid-beats-bootstrap-85d5881cf163). 

<h2 id="team-buy-in">The team's “aha” moment on switching over to Grid</h2>

Let’s face it, you know CSS Grid is awesome and worth adopting now, but not everyone gives a crap about CSS and understands it like you do. This is especially true when you’re dealing with a team of software & front-end engineers who think of CSS as being synonymous with Bootstrap (but super talented none-the-less).

<!-- Technically, I wasn’t a developer on this project. Instead, I was spearheading the design side. On paper, my say was limited to the UI/UX design decisions.  -->

Initially, it was a difficult to get buy-in knowing that the spec had been available in major browsers for only a handful of months. It also didn't help that we had already chosen Bootstrap as our foundational framework — one that already comes packaged with a widely adopted grid system based on Flexbox. 

<!-- Like any competent development team, if it’s not practical, they didn’t want to hear about it. This was especially true with the 3 month deadline we were given. No time to experiment.  -->

The “aha” moment came when we were putting together the following component which required a change in the markup order for the alternating variation: 


<figure><video width="100%" height="auto" controls>
  <source src="/assets/css-grid-template-areas.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<figcaption><a href="https://www.thomasnet.com/network/" target="_blank">Simple example</a> of Grid Template Areas which won the team over</figcaption></figure>

Not a groundbreaking design pattern, but keeping the markup consistent while alternating the design was crucial to the scalability and efficiency of the component-based design system we were putting together. 


[Grid Template Areas](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas) — the feature that will convince most Flexbox fanatics that Grid is the superior layout approach (more on Grid vs. Flexbox further below). The ability to switch the order of elements without touching markup or implementing any JS wizardry immediately won the team over and made CSS Grid a no-brainer.


(P.S. Yes, I know that there are a ton of different ways to skin a cat and I'm pretty sure you would've been able to recreate the same alternating set of patterns without making changes to the markup using only floats in 1.5 lines of code while typing blindfolded — I get it, you know karate, I'm just being transparent with what worked for us.)

<!-- Now that the team was on board, it was time to get to work and figure out how to we wanted to implement CSS Grid. -->

<h2 id="css-grid-flexbox">CSS Grid vs. Flexbox</h2>

When we began looking into CSS Grid, the same question surfaced over and over again: 

<blockquote class="text-aligncenter">
  <p>Can't you just do this with Flexbox?</p>
  <cite>Every single developer on the team</cite>
</blockquote>

Yes and no. At a basic level:

* Flexbox allows you to setup rules in a single dimension, meaning you have to choose either rows or columns but not both. 
* CSS Grid on the other hand is 2 dimensional, allowing you to simultaneously address both rows and columns in addition to providing a deeper set of rules specifically designed for layouts.

(And as I mentioned above, CSS Grid has Grid Template Areas, which is the reason most developers I've spoken to have adopted Grid.)


Instead of choosing one over the other, we agreed to use CSS Grid at the layout level and Flexbox at the component level (arranging child items of components). Although there's some overlap and and in some cases both could be used interchangeably, abiding by this rule helped us avoid any confusion in gray areas.

Now that the team was on board and use cases were defined, it was time to get to work and figure out how to we wanted to implement and scale CSS Grid. 

<h2 id="css-grid-foundation">Laying the CSS Grid foundation</h2>



With five developers working simultaneously on the front-end of the website and an aggressive three month deadline to meet, our foundation had to be spot on in order maintain a fast-paced coordinated effort.



<h3>Sass mixin</h3>

We created a simple Sass mixin that would help us keep a consistent gutter across all instances of the grid.

<pre class="language-markup"><code>@mixin display-grid {
    display: grid;
    grid-template-rows: auto;
    grid-gap: 1.5em;
}</code></pre>

We would include this mixin it at the container level of the sections we wanted to include to use grid on:

<pre class="language-markup"><code>.container {
     @include display-grid;
     grid-template-columns: repeat(2, 1fr);
}</code></pre>

Here's an example with breakpoints:
<pre class="language-markup"><code>.container {
    @include media-breakpoint-up(md) {
        @include display-grid;
        grid-template-columns: repeat(2, 1fr);
    }
    @include media-breakpoint-up(lg) {
        grid-template-columns: repeat(4, 1fr);
    }
}</code></pre>

That's it. No bloated dependencies, everything is in the browser.

<h3>Reusable classes</h3>

In efforts to maintain a DRY approach, we created column classes that allowed us to easily apply grid rules to any container.

<pre class="language-markup"><code>%grid-helpers-base {
    @include media-breakpoint-up(md) {
        @include display-grid;
        grid-template-columns: 1fr;
    }
}
.cols-2 {
    @extend %grid-helpers-base;
    @include media-breakpoint-up(md) {
        grid-template-columns: repeat(2, 1fr);
    }
}
.cols-3 {
    @extend %grid-helpers-base;
    @include media-breakpoint-up(md) {
        grid-template-columns: repeat(3, 1fr);
    }
}
.cols-4 {
    @extend %grid-helpers-base;
    @include media-breakpoint-up(md) {
        grid-template-columns: repeat(4, 1fr);
    }
}
.cols-auto-fit {
    @extend %grid-helpers-base;
    @include media-breakpoint-up(md) {
        grid-template-columns: repeat(auto-fit, minmax(15.625em, 1fr));
    }
}</code></pre>


This helped us out in about 75% of scenarios. For the rest we created custom CSS on a per layout basis. 

<h2 id="css-grid-fallbacks">Fallbacks for browsers without support</h2>

We chose [Modernizr](https://modernizr.com/) as our fallback approach — we found this to be the best option, which allowed us to cleanly separate fallback code from our base. 

When CSS Grid is not available, Modernizr adds <code>.no-cssgrid</code> to the <code>html</code> tag of the page. This allowed us to write nested rules of simple floats with percentages for browsers without support.

<!-- Staying true to the mobile-first approach, we served a one column layout as our starting point and avoided using grid until after the medium breakpoint.  -->



<!-- 
[Modernizr](https://modernizr.com/) lets us know when CSS Grid is not available by adding the class “no-cssgrid” to the body of the page. For browser’s lacking grid, we would use simple floats with percentages for width and padding for gutters.  -->

<pre class="language-markup"><code>.no-cssgrid {
    .cols-2 {
        @include media-breakpoint-up(md) {
            >* {
                width: 50%;
                padding-right: $baseline*3;
                float: left;
                margin-bottom: $baseline*3;
            }
        }
    }
    .cols-3 {
        @include media-breakpoint-up(md) {
            >* {
                width: 33.3%;
                padding-right: $baseline*3;
                float: left;
                margin-bottom: $baseline*3;
            }
        }
    }
    .cols-4 {
        @include media-breakpoint-up(md) {
            >* {
                width: 25%;
                padding-right: $baseline*3;
                float: left;
                margin-bottom: $baseline*3;
            }
        }
    }
    .cols-auto-fit {
        @include media-breakpoint-up(md) {
            text-align: center;
            >* {
                min-width: 15.625em;
                padding-right: $baseline*3;
                display: inline-block;
                margin-bottom: $baseline*3;
            }
        }
    }
}</code></pre>

 

We kept this simple by setting the limit to one set of rules in medium viewport sizes and up. 

At the time of writing, the mobile agent Google uses to perform their [mobile-friendly test](https://search.google.com/test/mobile-friendly) does not support Grid — adding fallbacks to without media queries returned all of our pages as “not mobile-friendly" (we learned this the hard way).

We chose not to go the [Feature Query](https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/) route since this lacks support in older browsers including IE11. Adding a fallback to a fallback defeats the purpose of the feature.

In the case of CSS Grid, rules that are added won't have any effect in browsers that don't have support.

There are some fallback methods that suggest adding floats within the same code as CSS Grid without using Modernizr. Not a fan of this approach since it mixes fallback code with the rest of your code — this makes it really hard for any developer to pick up and understand what the hell's going on.

<h2 id="conclusion">To conclude</h2>

<!-- It has been close to a month since we've launched and so far maintenance the website has been smooth  and metrics of the website for users without Grid support surprisingly went up.

These, I believe, are two of main factors holding back designers &amp; developers in decision-making roles from adopting the awesomeness of Grid at a larger scale. 
 -->




Two of main factors holding back decision-makers from adopting the awesomeness of Grid at larger scale are maintenance and website metrics. 

So far it has been close to a month since we've launched — website maintenance has been smooth and key metrics of the website for users on IE11 and other legacy browsers surprisingly went up.


Personally, I haven't been this excited to integrate a feature into my workflow since I discovered semantic 
markup back in 2005. CSS Grid provides a standardized approach to layouts on the web. Let's celebrate this.







<!-- <h2>Bonus: My Fav CSS Grid Features</h2>





CSS Grid provides a standardized approach to layouts on the web. Let's celebrate this. -->

<h2>Resources</h2>

* [Grid By Example](https://gridbyexample.com/) - examples, patterns, and resources - the hub for everything CSS Grid related.
* [Learn CSS Grid](http://jensimmons.com/post/feb-27-2017/learn-css-grid) -  A good primer article by Jen Simmons with a ton of resources.
* [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - My cheat sheet for CSS Grid.
* [The New CSS Layout (Book)](https://abookapart.com/products/the-new-css-layout) - Book written by Rachel Andrew (part of the A Book Apart series).
* [Can I Use CSS Grid Layout](https://caniuse.com/#feat=css-grid) - Browser support for CSS Grid globally is at 82% at the time of writing.

A very special thanks to [Jen Simmons](http://jensimmons.com) and [Rachel Andrew](https://rachelandrew.co.uk) for providing the resources and spearheading the CSS Grid movement over the past 7 years. They're the reason this article was able to come together.
