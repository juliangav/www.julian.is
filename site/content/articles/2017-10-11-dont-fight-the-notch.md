---
title: "Don't Fight The Notch — Designing for the iPhone X"
description:  Coming to terms with the notch on the iPhone X and its effect on mobile design.
tags: [CSS, Mobile,]
lastmod: 2017-10-17
date: "2017-10-17"
time: 3 Minutes
categories:
  - "Development"
slug: "iphone-x-notch" 
images: ["assets/og-dont-fight-the-notch.jpg"]
icon: /assets/aico-dont-fight-the-notch.svg
comments: false


---

Unless you're off on a remote island and you've dismissed all technology from your life (props for somehow making your way here), I’m sure that by now you’ve heard of the upcoming iPhone X and it’s edge-to-edge display. In their effort to make a true all-screen phone, Apple introduced a “notch” that takes up part of the screen, encapsulating the front camera and additional sensors.

Pretty interesting from a design standpoint, but I’ll cut to the chase: This directly affects how our websites get formatted on these devices — it’s a pretty big deal.

(Related: [Static Websites + JAMstack = <3](/article/static-websites-and-jamstack/))

<figure>
	<img src="/assets/iphone-x-landscape-viewport-fit-default.jpg" alt="Default Website Formatting on iPhone X">
	<figcaption>Default Website Formatting on iPhone X</figcaption>
</figure>

You can see Safari adds default margins in order to buffer the safe areas of the notch.

So for those who craft the web, we could choose to continue designing as is and let the browsers make design decisions for us. Or we could come to terms with reality, accept the next generation of device screens, and take full control of our designs. (What do you think I’m advocating for?)


Regardless of our opinions of Apple’s approach, the fact is that at the time of writing this post, Safari takes up [51.24% of the mobile market share here in the United States](http://gs.statcounter.com/browser-market-share/mobile/united-states-of-america), and [17.74% world wide](http://gs.statcounter.com/browser-market-share/mobile/worldwide) — a ton of people are going to be viewing our websites through these displays. 

No need for a complete overhaul of your existing code base, though. You can embrace the notch with two simple code changes.


## Remove default margins with viewport-fit=cover

Based on the [CSS Round Display Spec](https://drafts.csswg.org/css-round-display/), we’re able to get websites to take up the entire screen by adding <code>viewport-fit=cover</code> to the viewport meta tag in the &lt;head&gt;. Here's what mine looks like:



<pre class="language-markup"><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"&gt;</code>
</pre>

 This descriptor, <code>viewport-fit</code>, accepts two other values: <code>auto</code>, the default behavior, and <code>contain</code> which, [according to the CSS Working Group](https://drafts.csswg.org/css-round-display/#viewport-fit-descriptor), is when “the initial layout viewport and the visual viewport are set to the largest rectangle which is inscribed in the display of the device.” I’m not entirely sure what that means, but in this case it seems to have the same result as default.

Getting back on track here... Now our website covers (get it?) the screen in its entirety. We now have make sure that the notch doesn’t interfere with any elements on the website — remember, those default margins were there for a reason.

<figure>
	<img src="/assets/iphone-x-landscape-viewport-fit-cover.jpg" alt="Website Formatting on iPhone X w/ viewport-fit=cover">
	<figcaption>Website Formatting on iPhone X w/ viewport-fit=cover </figcaption>
</figure>

## Avoiding Safe Areas with constant()

Apple introduced <code>constant(safe-area-inset-*)</code>, which resolves to the dimensions needed by the user agent or browser to avoid the notch and other safe areas of the phone.

<pre class="language-markup"><code>.inner-wrap {
  padding:2.5em constant(safe-area-inset-right) 2.5em constant(safe-area-inset-left);
}</code>
</pre>

Our content is now respecting the safe areas defined by the UA.

<figure>
	<img src="/assets/iphone-x-horizontal-viewport-fit-cover.jpg" alt="Website Formatting on iPhone X w/ viewport-fit=cover and constant()">
	<figcaption>Website Formatting on iPhone X w/ viewport-fit=cover and constant()</figcaption>
</figure>



At first, I wanted to bypass constant() and just use good ol’ ems/rems. The problem is that the dimensions of these safe areas will most likely change when other devices introduce safe areas and future versions of the iPhone are released. Avoiding constant() would be the equivalent of designing fixed-width mobile websites to only fit the iPhone.

Even if you were to take this approach today, the dimensions of the safe areas change when you go from landscape to portrait.

<h3>Fallback for constant()</h3>

Browsers that don’t support constant() will display a value of 0 (that’s pretty much every browser except Safari at the time of writing this post). The following does the trick for me:


<pre class="language-markup"><code>.inner-wrap {
  padding:2.5em 1.5em 2.5em 1.5em;
  padding:2.5em constant(safe-area-inset-right) 2.5em constant(safe-area-inset-left);
}</code></pre>

## Dimensions in Pixels

I was able to get a list of dimensions from the iPhone X Simulator in Xcode, and now, I’m sharing it with you.

<figure class="figure-fullwidth">
	<img src="/assets/iphone-x-notch-safe-area-dimensions.jpg" alt="iPhone X Safe Area Dimensions">
	<figcaption>iPhone X Safe Area & Element Dimensions</figcaption>
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


## Closing Thoughts

Were the design decisions made by Apple the correct ones? Maybe. Will this change the way we build websites? Yes, but so did responsive web design back in 2011 and [Progressive Web Apps](/article/progressive-web-apps/) within the last year at a much larger scale. The reality of it is that we're part of an unpredictable industry; learning and adopting are the two habits that keep us afloat.

Let’s take this change with a grain of salt and prep for what the future of mobile devices may have in store. 

## Resources

* [Designing Websites for iPhone X](https://webkit.org/blog/7929/designing-websites-for-iphone-x/) - The original article published by WebKit that drove everyone nuts
* [Removing the White Bars in Safari on iPhone X](http://stephenradford.me/removing-the-white-bars-in-safari-on-iphone-x/) - Well put together article on removing the margins in the iPhone X
* [“The Notch” and CSS](https://css-tricks.com/the-notch-and-css/) - Chris Coyier's take on the issue
* [New WebKit Features in Safari 11](https://webkit.org/blog/7956/new-webkit-features-in-safari-11/) - Self-explanatory
