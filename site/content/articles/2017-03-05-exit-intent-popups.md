---

title:  "User-Friendly Exit Intent Modals"
author: Julian Gaviria
description:  As users, we hate popups. We never click on them. They’re annoying. They get in the way. But as conversion rate optimizers, they just work.
excerpt: As users, we hate popups. We never click on them. They’re annoying. They get in the way. But as conversion rate optimizers, they just work.
categories:
  - "Development"
  - "UX"
tags: [ExitIntent, Modals, CRO, ABTest, Code]
images: ["assets/og-exit-intent-popup.jpg"]
time: 5 Minutes
comments: false
slug: "exit-intent-popups"
date: "2017-03-05"
---

As users, we hate popups. We never click on them. They’re annoying. They get in the way. But as conversion rate optimizers, they just work. They produce results by making themselves very difficult to ignore, and believe it or not, people do convert on these. Good news, though — somewhere, somehow, someone was able to find a middle ground to this. It’s what we call “exit intent modals” or, if you prefer to sound Google smart, “exit intent interstitials."

(You’re more than welcome to <a href="#code" class="smooth-scroll">skip my ramble and go straight to the code</a>.)



In comparison to the intrusive popups that appear as soon as you visit a page (or in some cases, after a slight delay), an exit intent popup appears when the user shows an intent to exit the website (hence the name). This allows for the user to have a better experience on the website by not interrupting their visit until the very end when they’re ready to call it quits. 

<figure>
  <img src="/assets/exit-intent-modal-example.jpg" alt="Example of an exit intent modal" class="img-border">
  <figcaption>Exit Intent Modal Example (yes I know you hate it, but read on)</figcaption>
</figure>

Now, just so we’re on the same page, I’m not referring to those popups you see on any of those shady websites you've been visiting (you know, the ones that are almost impossible to exit from). Rather, let’s focus on the simple modal that shows up before you leave the website — where you’re free to close your window without being prohibited to do so (or being repeatedly asked if you’re <i>really, really</i> sure). <b>I've activated it for this blog post, go ahead and move your mouse off of the browser window</b>.

It’s not magic. It’s not big brother. It’s not a crazy complicated algorithm that some tech scientist invented after years of not seeing sunlight. It’s actually a small, simple script that’s added to your website that detects when the user’s mouse hovers outside of the browser window. It’s usually an action someone takes immediately before exiting out of the tab or browser window. 

(Bonus: Later on in this post, you’ll get step-by-step instructions on how to add it to your website’s existing lightbox/popup scripts, so keep reading.)

Even though this technique has been around for a few years, momentum skyrocketed when [Google announced](https://webmasters.googleblog.com/2016/08/helping-users-easily-access-content-on.html) that as of January 10, 2017, websites would be penalized for the relationship between mobile searches and intrusive interstitials. The search engine giant has picked up on the poor UX these popups cause on smaller screens. The penalty only applies if the interstitial appears on a page directly after arriving from a Google-mobile search result. Nothing is stopping Google from moving forward with a full-fledged desktop initiative, so future-proof now. 


All of these considerations and the careful planning is more than worth it — exit intent popups convert like crazy, and that’s what you’re here for, yes?


 Okay, enough with the theory. Let’s get into practicality and implementation. Over the past few months, we at [RPM](https://rpm.thomasnet.com) have been doing some heavy testing on exit intent to see what yields the best results — take a look at some of our findings below:

<h2>A/B Test: Delayed Popup vs. Exit Intent Popup</h2>

We started off by testing a traditional delayed popup vs an exit intent popup. (Spoiler: The results threw us off a bit, but nonetheless, what we learned from this was pretty valuable.)

<figure>
	<img src="/assets/delayed-popup-vs-exit-intent-popup.jpg" alt="Delayed Popup vs. Exit Intent Popup" class="img-border">
	<figcaption>Delayed Popup vs. Exit Intent Popup &mdash; A/B Test</figcaption>
</figure>

<div class="rows-of-2">
	<div><h3 class="text-aligncenter">Variant A</h3>
<p>Popup activates 5 seconds after the user initially visits the website.</p>

<p>Converted at <b>1.36%</b> with <b>23 signups</b> out of <b>1687 visitors</b>.</p></div>

<div><h3 class="text-aligncenter">Variant B</h3>
<p>Popup activates once the user shows an intent to exit the website.</p>
<p>Converted at <b>0.69%</b> with <b>12 signups</b> out of <b>1722 visitors</b>.</p></div>
</div>

At a first glance, this seems like somewhat of a disappointment since the results did not align with our hypothesis of “by presenting the popup as an exit intent, users are more likely to convert.” But looking at the vital signs of the website, Variation B had a 4% improvement in website engagement and a 14% improvement in RFQs. 

This was enough evidence for us to conclude that there was an overall improvement in the UX of the website to give exit intent method more attention.

<h2>Multivariate Test: Strong Messaging + Multiple Offers</h2>

Armed with the knowledge of our initial test, we created a multivariate test of the exit intent with a strong focus on the messaging and offer.

<h3>The Control</h3>

No Exit Intent Popup; Website Converted at <b>7.02%</b> with <b>88 leads generated</b> (form submissions) out of <b>1,254 visitors</b>. 

<hr>

<div class="rows-of-3">
	<div><h3 class="text-aligncenter">Variant A</h3>
<p class="text-aligncenter small-font-size">Single Offer <br>with Intro Message</p>



<figure><a href="/assets/multivariate-exit-intent-a.jpg" class="lightbox"><img src="/assets/multivariate-exit-intent-a.jpg" alt="Multivariate Test Variant A" class="img-border"></a></figure>

<p class="small-font-size">
Website Converted at <b>8.59%</b> with <b>108 leads generated</b> out of <b>1,258 visitors</b> <span class="test-improvement">(+22.3% Improvement)</span>.</p>
</div>
<div><h3 class="text-aligncenter">Variant B</h3>
<p class="text-aligncenter small-font-size">Top 3 <br>Converting eBooks
</p>

<figure><a href="/assets/multivariate-exit-intent-b.jpg" class="lightbox"><img src="/assets/multivariate-exit-intent-b.jpg" alt="Multivariate Test Variant B" class="img-border"></a></figure>
<p class="small-font-size">
Website Converted at <b>8.14%</b> with <b>109 leads generated</b> out of <b>1,339 visitors</b> <span class="test-improvement">(+16.0% Improvement)</span></p>


</div>

<div><h3 class="text-aligncenter">Variant C</h3>
<p class="text-aligncenter small-font-size">Single Offer w/ Intro <br>Msg + Top 2 eBooks

</p>

<figure><a href="/assets/multivariate-exit-intent-c.jpg" class="lightbox"><img src="/assets/multivariate-exit-intent-c.jpg" alt="Multivariate Test Variant C" class="img-border"></a></figure>
<p class="small-font-size">
Website Converted at <b>10.12%</b> with <b>127 leads generated</b> out of <b>1,255 visitors</b> <span class="test-improvement">(+44.2% Improvement)</span></p>
</div>
</div>

We then tested multiple variations, and we’ve consistently improved conversion rates by +40%. Like I said, it works. 

Pretty cool, right? Time to try it for yourself...

<h2 id="code">Code for Exit Intent Popup</h2>

<p>This section is a geared a bit more towards developers, so if you're a marketer, simply share this section with your developer (or anyone who knows how to add JavaScript to a website). If you're still having trouble, <a href="mailto:me@julian.is">reach out to me</a> and I will gladly help out.</p>

<h3>Step 1: Choosing a Lightbox Script</h3>

This could work with any script of choice, but over the years I’ve found [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/) to be one of the most well documented, versatile, and lightweight popup scripts around. But whatever you do, don’t build a lightbox script from scratch, even though the concept is relatively simple, there are many intricacies to take into consideration in order to provide a good user experience. 

<h3>Step 2: Adding the Exit Intent Listener</h3>

Once Magnific Popup is up and running, add the following code to your main.js — assuming all of your custom js code in a file similarly named file:

<pre class="language-markup"><code>// Exit intent
function addEvent(obj, evt, fn) {
  if (obj.addEventListener) {
    obj.addEventListener(evt, fn, false);
  } else if (obj.attachEvent) {
    obj.attachEvent("on" + evt, fn);
  }
}

// Exit intent trigger
addEvent(document, 'mouseout', function(evt) {
  if (evt.toElement === null && evt.relatedTarget === null && !localStorage.getItem('exitintent_show')) {
    $.magnificPopup.open({
      items: {
        src: '#newsletter-form' //ID of inline element
      },
      type: 'inline',
      removalDelay: 500, //Delaying the removal in order to fit in the animation of the popup
      mainClass: 'mfp-fade mfp-fade-side', //The actual animation
    });
    //localStorage.setItem('exitintent_show', 'true'); // Set the flag in localStorage
  }
});</code>
</pre>

What we’re doing here is wrapping the Magnific Popup function in an event listener that will detect when the mouse is off of the browser window. Once this happens, the lightbox function will fire. We’ve gone ahead and added a localstorage flag (similar to a cookie) that gets set once the script fires; this prevents us from showing the exit intent to the same visitors.  

<h3>Step 3: The HTML</h3>

But in order for it to fire correctly, it needs to call an existing HTML element on the dom. Here’s the HTML I’m using that contains my newsletter signup form:

<pre class="language-markup"><code>&lt;!--Delayed Popup--&gt;
&lt;div id="newsletter-form" class="white-popup mfp-hide"&gt;
  &lt;h2&gt;Subscribe to my articles&lt;/h2&gt;
  &lt;p&gt;I promise I won't bug you much, just a heads up for whenever I publish anything new.&lt;/p&gt;

  &lt;!-- Begin MailChimp Signup Form --&gt;
		(Form Code Goes Here)
  &lt;!--End mc_embed_signup--&gt;

&lt;/div&gt; 
&lt;!--End Delayed Popup--&gt;</code>
</pre>

<h3>Step 4: The CSS</h3>

Once this is all set, you can style it a bit with some custom CSS:

<pre class="language-markup"><code>.white-popup {
  position: relative;
  background: #FFF;
  padding: 20px;
  width: auto;
  max-width: 500px;
  margin: 20px auto;
  > * {
    margin-top: 0;
  }
}</code>
</pre>

And now you have your very own exit intent popup. Congratulations! (Sorry, no “exit-intent technology” here — there’s no such thing.)

I'm curious to hear about what you’ve learned from this post, ways to improve patterns or how you’ve used popups. Don’t hesitate to [tweet](https://twitter.com/juliangav) at me. 

If you're interested in optimizing the load time of your website, I recently wrote [A Simple Baseline for Fast Loading Accessible Websites]({% post_url 2017-01-15-baseline-for-fast-loading-websites %}).


<!--Delayed Popup-->
<div id="newsletter-form-ab-test-post" class="white-popup mfp-hide">
  <figure class="np-logo"><img src="/img/julian-signature.svg" alt="Site Logo"></figure>
  <h2>Subscribe to my articles</h2>
  <p>I promise I won't bug you much, just a heads up for whenever I publish anything new.</p>
  <!-- Begin MailChimp Signup Form -->
  <div id="mc_embed_signup">
    <form action="//julian.us14.list-manage.com/subscribe/post?u=e9ab548a9c3a7062bb0ad1f2a&amp;id=c08c6bdfaf" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <div id="mc_embed_signup_scroll">
        <div class="mc-field-group">
          <label for="mce-EMAIL">Email:*
          </label>
          <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Your Email Address">
        </div>
        <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div>
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_e9ab548a9c3a7062bb0ad1f2a_c08c6bdfaf" tabindex="-1" value="">
        </div>
        <div class="clear">
          <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
        </div>
      </div>
    </form>
  </div>
  <!--End mc_embed_signup-->
</div>
<!--End Delayed Popup-->





<!-- <script>

//Exit intent
function addEvent(obj, evt, fn) {
  if (obj.addEventListener) {
    obj.addEventListener(evt, fn, false);
  } else if (obj.attachEvent) {
    obj.attachEvent("on" + evt, fn);
  }
}

// Exit intent trigger
addEvent(document, 'mouseout', function(evt) {

  if (evt.toElement === null && evt.relatedTarget === null && !localStorage.getItem('exitintent_show')) {
    $.magnificPopup.open({
      items: {
        src: '#newsletter-form-popup' //ID of inline element
      },
      type: 'inline',
      removalDelay: 500, //Delaying the removal in order to fit in the animation of the popup
      mainClass: 'newsletter-popup mfp-fade mfp-fade-side', //The actual animation
    });

    //localStorage.setItem('exitintent_show', 'true'); // Set the flag in localStorage
  }
});</script> -->