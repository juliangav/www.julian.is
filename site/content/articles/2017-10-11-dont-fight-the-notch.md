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

Unless you live under a rock, I’m sure that by now you’ve heard of the upcoming iPhone X and it’s edge-to-edge display. In their effort to make a true all-screen phone, Apple has introduced a “notch” that takes up part of the screen which encapsulates the front camera and additional sensors. This affects how our websites get formatted on these devices — it’s a pretty big deal. 

<figure>
	<img src="/assets/iphone-x-landscape-viewport-fit-default.jpg" alt="Default Website Formatting on iPhone X">
	<figcaption>Default Website Formatting on iPhone X</figcaption>
</figure>

Safari takes the liberty to add default margins in order to respect the safe areas of the notch.

But as those who craft the web, we could choose to continue designing as is and let the browsers make design decisions for us. Or we could come to terms with reality, accept the next generation of device screens, and take full control of our designs.


Regardless of what we think of the approach Apple took, the fact is that at the time of writing Safari takes up [51.24% of the mobile market share here in the United States](http://gs.statcounter.com/browser-market-share/mobile/united-states-of-america), and [17.74% world wide](http://gs.statcounter.com/browser-market-share/mobile/worldwide) — a ton of people are going to be viewing our websites through these displays. 

No need for a complete overhaul of your existing code base. You can embrace the notch with two simple code changes.



<h2>Removing default margins with viewport-fit=cover</h2>

Based on the [CSS Round Display Spec](https://drafts.csswg.org/css-round-display/), we’re able to get websites to take up the whole screen by adding ‘viewport-fit=cover’ to the viewport meta tag in the &lt;head&gt;. Here's what mine looks like:



<pre class="language-markup"><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"&gt;</code>
</pre>

 This attribute, 'viewport-fit', accepts two other values: 'auto', the default behavior, and 'contain' which, [according to the CSS Working Group](https://drafts.csswg.org/css-round-display/#viewport-fit-descriptor), is when "The initial layout viewport and the visual viewport are set to the largest rectangle which is inscribed in the display of the device" — not sure what that means, but in this case it seemed to have the same effect as default.

Back on track, now our website covers (get it?) the whole screen. Next we make sure that the notch doesn't interfere with any elements on the website (remember, those default margins were there for a reason).

<figure>
	<img src="/assets/iphone-x-landscape-viewport-fit-cover.jpg" alt="Website Formatting on iPhone X w/ viewport-fit=cover">
	<figcaption>Website Formatting on iPhone X w/ viewport-fit=cover </figcaption>
</figure>

<h2>Safe areas & respecting them with constant()</h2>

Apple introduced 'constant(safe-area-inset-*)' which resolves to the dimensions needed by the user agent or browser to avoid the notch and other safe areas of the phone. 

<pre class="language-markup"><code>.inner-wrap {
  padding:2.5em constant(safe-area-inset-right) 2.5em constant(safe-area-inset-left);
}</code>
</pre>

Our content is now respecting the safe areas defined by the UA. 

<figure>
	<img src="/assets/iphone-x-horizontal-viewport-fit-cover.jpg" alt="Website Formatting on iPhone X w/ viewport-fit=cover and constant()">
	<figcaption>Website Formatting on iPhone X w/ viewport-fit=cover and constant()</figcaption>
</figure>



At first, I wanted to bypass constant() and just use good ol' ems/rems. The problem is that the dimensions of these safe areas will most likely change in the future when other devices introduce safe areas and future versions of the iPhone are released. Avoiding constant() would be the equivalent of designing fixed-width mobile websites to only fit the iPhone.

Even if you were to take this approach today, the dimensions of the safe areas change when you go from landscape to portrait.

 



<h3>Fallback for constant()</h3>

Browsers that don’t support constant() will display a value of 0 (that’s pretty much every browser except Safari at the time of writing). The following does the trick for me:


<pre class="language-markup"><code>.inner-wrap {
  padding:2.5em 1.5em 2.5em 1.5em;
  padding:2.5em constant(safe-area-inset-right) 2.5em constant(safe-area-inset-left);
}</code></pre>

<h2>Dimensions in Pixels</h2>

For your curiousity, I put together a list dimensions that I was able to get from the iPhone X Simulator in Xcode.

<figure class="figure-fullwidth">
	<img src="/assets/iphone-x-notch-safe-area-dimensions.jpg" alt="iPhone X Safe Area Dimensions">
	<figcaption>iPhone X Safe Area Dimensions</figcaption>
</figure>

<h3>Elements</h3>

<table>
	<tr>
		<th width="50%">Element</th>
		<th width="25%">Landscape</th>
		<th width="25%">Portrait</th>
	</tr>
	<tr>
		<td><b>Notch</b></td>
		<td>31x209</td>
		<td>31x209</td>
	</tr>
	<tr>
		<td><b>Home Screen Indicator</b></td>
		<td>5x209</td>
		<td>5x133</td>
	</tr>
	
</table>


<h3>Safe Areas</h3>

<table>
	<tr>
		<th width="50%">Area</th>
		<th width="25%">Landscape</th>
		<th width="25%">Portrait</th>
	</tr>
	
	<tr>
		<td><b>constant(safe-area-inset-top)</b></td>
		<td>0</td>
		<td>0</td>
	</tr>
	<tr>
		<td><b>constant(safe-area-inset-right)</b></td>
		<td>44px</td>
		<td>0</td>
	</tr>
	<tr>
		<td><b>constant(safe-area-inset-bottom)</b></td>
		<td>21px</td>
		<td>34px</td>
	</tr>
	<tr>
		<td><b>constant(safe-area-inset-left)</b></td>
		<td>44px</td>
		<td>0</td>
	</tr>
</table>





<!-- <h3>Horizontal</h3>

<figure>
	<img src="/assets/iphone-x-horizontal-viewport-fit-default.jpg" alt="iPhone X Horizontal Viewport Fit Default">
	<figcaption>Top: X
Right: X
Bottom: X
Left: X</figcaption>
</figure>



<h3>Vertical</h3>

<figure>
	<img src="/assets/iphone-x-horizontal-viewport-fit-default.jpg" alt="iPhone X Horizontal Viewport Fit Default">
	<figcaption>Top: X
Right: X
Bottom: X
Left: X</figcaption>
</figure>
 -->


