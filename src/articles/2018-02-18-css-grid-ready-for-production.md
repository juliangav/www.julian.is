---
title: 'How We Adopted CSS Grid at Scale'
description: From team buy-in to fallbacks, here's the approach we took at Thomas with the implementation of CSS Grid.
tags: [CSS, CSSGrid]
lastmod: 2018-03-01
date: '2018-03-01'
time: 5 Minutes
categories:
  - 'Development'
slug: 'css-grid-at-scale'
path: '/article/css-grid-at-scale/'
images: ['assets/og-css-grid-at-scale.jpg']
icon: /assets/aico-css-grid-at-scale.svg
comments: false
---

Last month we launched the redesign of [Thomasnet.com](https://www.thomasnet.com) — the backbone of the American manufacturing industry (and the company that happens to employ me full-time). A redesign in which we decided to go all-in with CSS Grid.

This is a website that in January alone received 100k+ visitors on Internet Explorer 11 — the main culprit of browsers without CSS Grid support.

The fact that CSS Grid is ready to use in production isn't <i>really</i> a secret — Rachel Andrew has been [telling us this since July of 2017](https://rachelandrew.co.uk/archives/2017/07/04/is-it-really-safe-to-start-using-css-grid-layout/). She’s even curated a [list of websites using CSS Grid in production today](https://cssgrid.design/).

From team buy-in to fallbacks, here's the approach we took at Thomas with the implementation of CSS Grid.

<!-- <h3>Table of Contents</h3>

<ol>
	<li><a href="#why-css-grid" class="smooth-scroll">A quick primer on CSS Grid</a></li>
	<li><a href="#team-buy-in" class="smooth-scroll">Our Grid “aha” moment</a></li>
    <li><a href="#css-grid-flexbox" class="smooth-scroll">Resolving the CSS Grid vs. Flexbox argument</a></li>
	<li><a href="#css-grid-foundation" class="smooth-scroll">Laying the Grid foundation</a></li>
	<li><a href="#css-grid-fallbacks" class="smooth-scroll">Fallbacks for browsers without support</a></li>


	<li><a href="#conclusion" class="smooth-scroll">To conclude</a></li>

</ol> -->

<!-- <h2 id="why-css-grid">A quick primer on CSS Grid</h2> -->

## A quick primer on CSS Grid

(For all you know-it-alls, <a href="#team-buy-in" class="smooth-scroll">feel free to skip</a> the baseline knowledge stuff.)

CSS Grid is a spec that standardizes the approach to layouts on the web — a spec which has been seven years in the making. It's a HUGE step forward for design on the web.

Ironically enough, [CSS Grid was originally proposed by Microsoft](https://blogs.msdn.microsoft.com/ie/2011/04/14/ie10-platform-preview-and-css-features-for-adaptive-layouts/) back in April of 2011.

The unprefixed version of the spec was first made available in Firefox, Chrome, and Safari on March of 2017. On October 16 2017, Microsoft finally released Edge 16 with full support — making this the day CSS Grid Layout was officially adopted by all major browsers (I warned you of the irony).

Deciding on CSS Grid was pretty simple: We wanted to build a future-proof site with a lean front-end design foundation, aiming to leverage browser-native technology where possible in order to keep performance and efficiency at the forefront.

I won't bore you with any additional details here, plenty has been written on the web explaining the [benefits of CSS Grid over existing solutions](https://hackernoon.com/how-css-grid-beats-bootstrap-85d5881cf163).

<!-- <h2 id="team-buy-in">Our CSS Grid “aha” moment</h2> -->

## Our CSS Grid “aha” moment

Initially, it was a difficult to get buy-in knowing that the spec had been available in major browsers for only a handful of months. It also didn't help that we had already chosen Bootstrap as our foundational framework — one that already comes packaged with a widely adopted grid system based on Flexbox.

The “aha” moment came when we were putting together the following component that required a change in the markup order for the alternating variation:

<figure><video width="100%" height="auto" controls>
  <source src="/assets/css-grid-template-areas.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<figcaption><a href="https://www.thomasnet.com/network/" target="_blank">Simple example</a> of Grid Template Areas which won the team over</figcaption></figure>

It's not a groundbreaking design pattern, but keeping the markup consistent while alternating the design was crucial to the scalability and efficiency of the component-based design system we were putting together.

[Grid Template Areas](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas) — the feature that will convince most Flexbox fanatics that Grid is the superior layout approach (more on Grid vs. Flexbox further below). The ability to switch the order of elements without touching markup or implementing any JS wizardry immediately won the team over and made CSS Grid a no-brainer.

(P.S. I'm sure you would've been able to recreate the same alternating set of patterns without making changes to the markup using only floats in 1.5 lines of code while typing blindfolded — I get it; you're a ninja. But this happened to be the example that worked for us.)

<!-- <h2 id="css-grid-flexbox">Resolving the CSS Grid vs. Flexbox argument</h2> -->

## Resolving the CSS Grid vs. Flexbox argument

When we began looking into CSS Grid, the same question surfaced over and over again:

<blockquote class="text-aligncenter">
  <p>Can't you just do this with Flexbox?</p>
  <cite>Every single developer on the team</cite>
</blockquote>

Yes and no. At a basic level:

- Flexbox allows you to setup rules in a single dimension, meaning you have to choose either rows or columns but not both.
- CSS Grid on the other hand is two-dimensional, allowing you to simultaneously address both rows and columns in addition to providing a deeper set of rules specifically designed for layouts.

(And as I mentioned above, CSS Grid has Grid Template Areas, which is the reason most developers I've spoken to have adopted Grid.)

Instead of choosing one over the other, we agreed to use CSS Grid at the layout level and Flexbox at the component level (arranging child items of components). Although there's some overlap and in some cases both could be used interchangeably, abiding by this rule helped us avoid any confusion in gray areas.

Now that the team was on board and different use cases were addressed, it was time to get to work and figure out how to we wanted to implement and scale CSS Grid.

<!-- <h2 id="css-grid-foundation">Laying the CSS Grid foundation</h2> -->

## Laying the CSS Grid foundation

With five developers working simultaneously on the front-end of the website and an aggressive three month deadline, our foundation had to be spot on in order maintain a fast-paced coordinated effort.

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

<!-- <h2 id="css-grid-fallbacks">Fallbacks for browsers without support</h2> -->

## Fallbacks for browsers without support

We decided not to make layouts identical in legacy browsers as this would only double our work. In some of the fancier layouts we put together, we defaulted to a standard two-column layout as a fallback. We've come to notice that as long as the website is usable and the experience isn't broken, users in legacy browsers don't really mind not being served the latest and greatest version of the layout.

[Modernizr](https://modernizr.com/) was our fallback approach of choice — we found this to be the best option because we were able to cleanly separate fallback code from our base.

When CSS Grid is not available, Modernizr adds <code>.no-cssgrid</code> to the <code>html</code> tag of the page. This allowed us to write nested rules of simple floats with percentages for browsers without support.

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

At the time of writing, the mobile agent Google uses to perform their [mobile-friendly test](https://search.google.com/test/mobile-friendly) does not support Grid — adding fallbacks without media queries returned all of our pages as “not mobile-friendly." (We learned this the hard way.)

We chose not to go the [Feature Query](https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/) route since this lacks support in older browsers including IE11 and adding a fallback to a fallback defeats the purpose of the feature.

In the case of CSS Grid, rules that are added won't have any effect in browsers that don't have support.

There are some fallback methods that suggest adding floats within the same code as CSS Grid without using Modernizr. I'm not a fan of this approach since it mixes fallback code with the rest of your code, which makes it difficult for any developer to pick up and understand what's going on.

<!-- <h2 id="conclusion">To conclude</h2> -->

## To conclude

Risk aversion is a big part of what holds decision-makers back from adopting any new technology or features at larger scale. We need to make sure that decisions made on technology are efficient and maintainable, and they won't put the organization at risk by tanking important metrics.

In the weeks since launching the website, maintenance has been smooth and key metrics of the website for users on IE11 and other legacy browsers have surprisingly gone up. Is CSS Grid ready for production? I'll leave that up to you to decide.

CSS Grid provides a standardized approach to layouts on the web, and we should celebrate this.

<!-- <h2>Resources</h2> -->

## Resources

- [Learn CSS Grid](http://jensimmons.com/post/feb-27-2017/learn-css-grid) - A good primer article by Jen Simmons with a ton of resources
- [Grid By Example](https://gridbyexample.com/) - Examples, patterns, and resources - the hub for everything CSS Grid related
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - My cheat sheet for CSS Grid
- [Using CSS Grid: Supporting Browsers Without Grid](https://www.smashingmagazine.com/2017/11/css-grid-supporting-browsers-without-grid/) - Thorough Article by Rachel Andrew on CSS Grid fallbacks
- [The New CSS Layout (Book)](https://abookapart.com/products/the-new-css-layout) - Book written by Rachel Andrew (part of the A Book Apart series)
- [Can I Use CSS Grid Layout](https://caniuse.com/#feat=css-grid) - Browser support for CSS Grid globally is at 82% at the time of writing

A very special thanks to [Jen Simmons](http://jensimmons.com) and [Rachel Andrew](https://rachelandrew.co.uk) for providing the resources and spearheading the CSS Grid movement over the past seven years — they’re the reason this article was able to come together.
