---
title: "Don't Fight The Notch"
description:  Prepping your site for iPhone X and the next generation of devices.
tags: [CSS, Mobile,]
lastmod: 2017-10-11
date: "2017-10-11"
time: 5 Minutes
categories:
  - "UX"
slug: "the-notch" 
images: ["assets/og-ab-testing-lessons-learned.jpg"]
comments: false


---

Unless you live under a rock, I’m sure that by now you’ve heard of the upcoming iPhone X and it’s edge-to-edge display. In their effort to make a true all-screen phone, Apple has introduced a “notch” that takes up part of the screen which encapsulates the front camera and additional sensors. This is a big deal for us designers & developers because it directly affects how our websites get formatted on these devices. 

But as those who craft the web, we have two choices: 

<ol>
	<li>Continue designing as is and let the Safari, or the browser at hand, make design decisions for us:</li>

	<figure>
	<img src="/assets/iphone-x-horizontal-viewport-fit-default.jpg" alt="iPhone X Horizontal Viewport Fit Default">
</figure>


	<li>Or come to terms with reality, accept the new next generation of device screens, and take full control of our designs:</li>
		<figure>
	<img src="/assets/iphone-x-horizontal-viewport-fit-cover.jpg" alt="iPhone X Horizontal Viewport Fit Default">
</figure>


</ol>




Regardless of what we think of the approach Apple took, the fact is that at the time of writing Safari takes up 51.24% of the mobile market share here in the United States, and 17.74% world wide — a ton of people are going to be viewing our websites through this display. 

Here’s how to implement and embraced the notch.

<h2>Removing side bars with ‘viewport-fit=cover’</h2>

Based on the CSS Round Display Spec, we’re able to get my websites to display at full-with by adding ‘viewport-fit=cover’ to the viewport settings in the &lt;head&gt;.



<pre class="language-markup"><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"&gt;</code>
</pre>

No more ugly bars, which at a glance seems to do the job, but now let’s make sure that the notch doesn’t interfere with any elements on the website.  

<h2>Avoid the Notch with ‘safe-area-inset’</h2>

Apple introduced constant(safe-area-inset-*) which is the equivalent of the safe space needed to avoid the notch and other safe areas of the phone. 

<pre class="language-markup"><code>.inner-wrap {
  padding:2.5em constant(safe-area-inset-right) 2.5em constant(safe-area-inset-left);
}
</code>
</pre>

The reason to use these instead of manual padding is that these sizes may change in the future, and just like responsive design, we don’t want to have set sizes for every single different device out there. Be careful using these without a fallback, browsers that don’t support constant() will display a value of 0 (that’s pretty much every browser except Safari at the time of writing). 