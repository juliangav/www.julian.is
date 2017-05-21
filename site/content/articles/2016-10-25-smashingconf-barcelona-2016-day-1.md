---

title:  "SmashingConf Barcelona 2016 Day 1 Notes"
author: Julian Gaviria
description: Marcin Wichary with Typography, Val Head and animation, & Jessica Svendsen being so darn original, need I say more?
excerpt: Marcin Wichary with Typography, Val Head and animation, & Jessica Svendsen being so darn original, need I say more?
time: 13 Minutes
comments: false

slug: "smashingconf-barcelona-2016-day-1"
date: "2016-10-25"
---

I've made it all the way out to Barcelona for my second <a href="http://smashingconf.com" target="_blank" rel="noopener">SmashingConf</a>. I've attended plenty of conferences in the states but I wanted to learn something new in regards to both culture and web design. Needless to say, the first day at SmashingConf and my second day in Barcelona did not fall short of expectations. 

Below are some of the notes I've taken during the first day of talks. Keep in mind that these notes weren't edited and they were added just as they were jotted down. Some information may be missing (I didn't jot everything down); if I've misquoted something or something needs fixing, please let me know and I'll address. Enjoy!


<h2>Marcin Wichary - To Hell for Type</h2>

<a href="https://twitter.com/mwichary" target="_blank" rel="noopener">@mwichary</a>

<h3>Talk Notes</h3>
<ul><li>Poland did not have it’s own keyboards when computers began hitting mainstream. Most of the computers in Poland were individually imported from other countries (main the USA). </li>
<li>So many types of quotation marks. What Medium has to take into consideration for their platform</li>
<li>Tabular numbers (supported feature of open type).</li>
<li>Chromes spellchecker learns typography. Did not recognize the different apostrophes that medium has.
Marcin fixed chrome and created patch that chrome has now implemented (awesome).</li>
<li>All the underlines you see in medium are gradients on each word. </li>
<li>Uses letter outlines of the same color of the background to show spaces in the underline for each letter that overlaps.</li>
<li>“Slightly worse is better than nothing”</li>
<li>Typography has always been messy. Typewriters were always so limited. Hacks have been around since day one. To show negative margins, letters would bleed out of the letter block to overlap other blocks.</li>
<li>If you go to Medium and search for C:\Windows you will see the website in the System font.</li>
<li>Open sourcing his type tool</li>
</ul>

<h3>Q&A</h3>

<b>Q:</b> How did the system fonts (bug) make it into production?<br>
<b>A:</b> It happened in a small amount of setups that only a few of the users had. Better to get things out there quicker and then adjust rather than wait until everything is perfect.


<b>Q:</b> Do you think that the use of comic sans should be punishable by law?
<br><b>A:</b> No! Look up the history of comic sans (pretty interesting). It's great for people to be able to choose fonts (even if they choose the wrong ones), it shows personality.

<b>Q:</b> What did you use for your presentation with all the animations and what seemed to be live type? 
<br><b>A:</b>  Webapp for the presentation. <i>*I'll try and provide the link; I wasn't able to write it down.</i>

<b>Q:</b> (I did not write it down)
<br><b>A:</b> Keyboards are around 150 years old. Writing a book on keyboards.

<h3>My Takeaway</h3>

Typography on the web is way more complicated than it's perceived. Just by the quotation example that Marcin presented, and this seems to be just the tip of the iceberg. There's a book that has been sitting on my bookshelf for quite some time now called <a href="https://abookapart.com/products/on-web-typography" target="_blank" rel="noopener">"On Web Typography"</a> by Jason Santamaria. Even though it's a couple of years old now, I'll be dusting it off when I get home and give it a go. 

<h2>Val Head - Designing Meaningful Animation</h2>

<a href="https://twitter.com/vlh" target="_blank" rel="noopener">@vlh</a>

<ul>
	<li>We should use animation more on the web. Not everyone agrees.</li>
	<li>Don’t over do it, please (showed overdone example).</li>
	<li>Stripe checkout. The reason stripe animations feel good is because they’re put there intentionally. The reason the flipping paragraphs where in the previous example is because we can do it in CSS (no real reason). </li>
	<li>Great UI animations have purpose and style.</li>
	<li>The core principles: the 12 principles of Animation by Disney  (book). the12prciniples.tumblr.com. Sometimes also summarized as the 10 principles of motion-design.</li>
	<li>Animation Principle - Timing & Spacing (most important principle)
	<ul>
		<li>Timing - The amount of time it takes of an action to happen. The duration. (bouncing ball is the hello world of animation).</li>
		<li>Spacing - The changes in speed over the duration of the action’s timing.</li>
		<li>Benefits of timing and spacing - makes animated object to obey the laws of physics / establishes mood, emotion and reaction.</li>
		<li>What sort of physical traits fit our modal?</li>
		<li>What sort of mood or emotion should it show now?</li>
	</ul>	</li>
	<li>By the way we make things move, we say so much.</li>
	<li>CSS easing keyboard is limited. That’s why we have Cubic Bezier (cubic-bezier.com); everything is better with cubic-beziers. Use custom cubic-beziers than the defaults.</li>
	<li>Animation Principle - Follow through - Not everything comes to a stop at once; easiest way to get follow through, choose a bezier curve that goes outside of the graph</li>
	<li>Animation Principle - Secondary Action (twitter heart animation)</li>
	<li>Choreography - Designing all your UI animations to feel logical and related; similar objects animate in similar ways; Entrances informs exits (be consistent by how things come in and out); match velocities (instead of durations).  </li>
	<li>Sites for finding good examples of animation: 
	<ul>
		<li><a href="http://artofthetitle.com" target="_blank" rel="noopener">artofthetitle.com</a> - title animations (behind the scenes)</li>
		<li><a href="http://capptivate.co" target="_blank" rel="noopener">capptivate.co</a> - gallery site of good iOS animations</li>
		<li><a href="http://uyi.io" target="_blank" rel="noopener">uyi.io</a> - collects good examples of web animations and categorizes them on how they work</li>
	</ul></li>
	<li>Book Val Wrote - Designing Interface Animation - <a href="https://designinginterfaceanimation.com" target="_blank" rel="noopener">https://designinginterfaceanimation.com</a> </li>
</ul>


<b>Q:</b> What about accessibility - it is aiding or is it confusing?
<br><b>A:</b>  It can be both. If you have animation that’s placed for good purpose, it can help people understand what’s happening. But if you get a bit too crazy it can hurt the experience. (google safer animation of the web)

<b>Q:</b> Who owns animation? Is it a UX person, UI Person, programming skill?
<br><b>A:</b> You need everyone, good code, good ux intention, it needs to be affected by your entire team. You have to work together. The earlier the better (where it comes up in the process). As soon as possible and everyone needs to help.

<b>Q:</b> Good example of a design guide for animation?
<br><b>A:</b> Google style guide. Material Design; IBM has a good one.

<b>Q:</b> CSS, SVG, JS, all battling for the animation spotlight. Your thoughts?
<br><b>A:</b> Simple animations, CSS; Complex animations JS; SVGs, manipulating shapes; they each have their own strengths. 

<h3>My Takeaway</h3>

There's a science to animation and I'm going head first into the 12 principles of Animation by Disney that Val referenced.

Cubic bezier has always been a bit of a mystery to me. But from Val's talk, it's simply the manual way of creating animations in comparison to the defaults that CSS comes with; you have more control over the specifics. Motivated to look into this a bit more since I've recently been doing A/B testing on animations and their impact on conversions. The tool reference, <a href="http://cubic-bezier.com" target="_blank" rel="noopener">cubic-bezier.com</a> seems like an awesome starting point. 


<h2>Jessica Svendsen - Designing for Display</h2>

<a href="https://twitter.com/jessicasvendsen" target="_blank" rel="noopener">@jessicasvendsen</a> / <a href="http://jessicasvendsen.com" target="_blank" rel="noopener">jessicasvendsen.com</a>

<ul>
	<li>"I am interested in imperfections, quirkiness, insanity, unpredictability. That’s what we really pay attention to anyway.”</li>
	<li>"There are two types of designers, those who design systems and those who design content."</li>
	<li><a href="http://charlierose.com">charlierose.com</a></li>
	<li>"Clarifying is our business, obscuring is our pleasure.” Sulki and Min</li>
	<li>"Modernism is the result of design by committee"</li>
	<li>“I’m always trying to turn things upside down to see if they look any better.”</li>
	<li>“I am a real believer of the impractical in school. That’s not making things that are irrelevant. Impractical doesn’t mean irrelevant. But I don’t think that the restrictions of the commercial world are necessarily meaningful.” Michael Rock</li>
	<li>The best jobs require the least amount of recruitment.</li>
	<li>Work with designers who have a point of view about design and are willing to fight for it.</li>
	<li>Be a generalist as long as possible. </li>
	<li>Avoid breifs</li>
	<li>If you want to create idea-driven work, don’t compile moldboards or swipe; when you start creating work, step away from the computer</li>
	<li>Just because you can, doesn’t mean you should.</li>
	<li>Make sure what you’re making is meaningful</li>
	<li>A worthy opportunity will never present itself at a convenient moment. </li>
</ul>

<h3>Q&A</h3>

<b>Q:</b> How much time does it usually take you to get from nothing to an idea that works?
<br><b>A:</b> Goes back to the central idea, it tends to be pretty fast. Other projects your iterating until your pushing your own boundaries. Those are the one’s that take long.

<b>Q:</b> If we introduce unpredictably. Is there a predictable framework to produce unpredictability?
<br><b>A:</b> Not for making something different for the purpose of making something difference, not a good strategy. Using the content at hand.

<b>Q:</b> Is randomness a good thing? 
<br><b>A:</b> Randomness on the on screen experience has a huge potential in disrupting experience and creating something new. When you introduce too much randomization, you lose your own point of view. When you think about randomization, it still has to be in tandem with the idea of curation. There are limitations on how it could work.

<b>Q:</b>  Is generic always bad?
<br><b>A:</b> On the one hand, there is design that is accesibile. Design is this invisible format that lends itself to communicating an idea. A lot of times design is still not considered in the process, so much opportunity to break outside the process. When it feels like it’s intended for everyone, you feel generic. When it’s something intended for something in specific, it feels intended. 

<h3>My Takeaway</h3>

It's refreshing seeing a graphic designer within a cast of web folks. What I most respect about graphic designers is how they come up with their ideas; and this is exactly what her talk was on. A recurring theme that I've noticed throughout the talks is addressing the design problem we're seeing right now on the web: all of our designs look the same. This is something we're all struggling with regardless of the industries. A good amount of designers on the web don't have a formal design background; this is the main reason designs are being copied over and over again. Jessica did a good job of giving insight to her process and how she comes up with her ideas. Very inspiring and helped me reflect on my current process.

<h2>Tammy Everts - How to Find What Design Factors Influence Conversion Rates</h2>

<a href="https://twitter.com/tameverts">@tameverts</a>

<ul>
	<li>Performance affects peoples perception of a site and whether they return to the site or not.</li>
	<li>WPOstats.com (tool)</li>
	<li>Pages with more scripts are less likely to convert.</li>
	<li>The number of dom elements matter ALOT. Optimal 400-700</li>
	<li>Sessions that convert have fewer images than sessions that didn’t. (37% fewer images)</li>
	<li>Machine learning FTW! https://github.com/wpo-foundation/beacon-ml (tool)</li>
	<li>Dom ready (aka dom content loaded) and average session load time were the best combined indicators of bounce rate (at 4.5s bounce probability jumps to -60%)</li>
	<li>Start render is important (first paint is not start render / does not recommend first paint as a metric); Amazon's start render and repeat view are the same.</li>
	<li>People who come from search are less impatient; people coming from Facebook were more likely to drop off (Facebook is fast, link might’ve been misleading). Both google and Facebook are fast and perception might affect.</li>
	<li>6s conversion shrinks by 50% on browse pages (not checkout)</li>
	<li>Conversion Rate Impact Score</li>
	<li>User Timing - www.w3.org/TR/user-timing/</li>
	<li>2 second imporvemnt in median page load time almost doubled mobile conversions for fanatics.com</li>
	<li>User behavior is context sensitive and always changing</li>
	<li>Performance issues are unpredictable</li>
	<li>You can’t understand what you don’t measure</li>
	<li>You don’t have to optimize everything</li>
	<li>Even small design changes can make a big difference</li>
	<li><a href="http://performancebeacon.com">performancebeacon.com</a> - web performance, analytics, and optimization blog</li>
	<li><a href="http://wpostats.com">wpostats.com</a> - case studies and experiments demonstrating the impact of web performance optimization (WPO) on user experience and business metrics.</li>
</ul>

<h3>Q&amp;A</h3>

<b>Q:</b> If you’re a small agency what are some free toolsets to find analysis and find info quickly?
<br><b>A:</b> Webpagetest.org but won’t give you much user insight. RUM (real user monitoring) search on google and most have free trials. 

<b>Q:</b> Audience is diverse in RUM, new market?
<br><b>A:</b> What I see happening are two different things, some companies are creating their own data science teams; tools are realizing that most companies won’t do this, the tool does the data science for you; building out algorithms to make 90% of data actionable.

<b>Q:</b> Traffic source, opportunity with pre caching tools that are coming to the web, will this make a difference?
<br><b>A:</b> Used to work for a company called rad that could predict next page based on previous user data. You could turn it off for mobile to avoid killing your data. 

<b>Q:</b> Website that asked you to say which one was faster. Are modals successful?
<br><b>A:</b> Implemented properly, popups do help in terms of driving other areas of business. There’s been less done on how well they perform and their impact on those types of conversions.

<h3>My Takeaway</h3>

Testing is what my day to day job entails of nowadays. After many of the talks, I keep on asking myself the same question "But has it been tested to help conversions?". I was able to get a different and more insightful perspective on what I've been testing (and the way I've been testing) for the past year. Added two new resources to my arsenal, <a href="http://performancebeacon.com">performancebeacon.com</a> &amp; <a href="http://wpostats.com">wpostats.com</a>. What more can I ask for?  

<h2>Stephen Hay - The Tail And Its Dog</h2>

<a href="https://twitter.com/stephenhay">@stephenhay</a>

<ul>
	<li>Art direction is storytelling (well, that’s part of it anywhere)</li>
	<li>We’re wired for stories. When we get together with friends, we tell each other stories; we read stories to our children, etc.</li>
	<li>Wrote article on A List Apart <a href="http://alistapart.com/article/artdirweb" target="_blank" rel="noopener">“Art direction and the web”</a></li>
	<li>Two questions that are important: 1) what story are we telling; 2) how are we telling that story?</li>
	<li>Author of Responsive Design Workflow</li>
	<li> <a href="http://hansbrinker.com" target="_blank" rel="noopener">Hans Brinker Budge Hotel</a> website is an example of art direction / tells a story</li>
	<li>"There’s no such thing as bad design, only inappropriate design" - Neville Brody</li>
	<li>Why do we have bad art direction on the web? Lack of design foundation; Lack of critical thinking; Reliance on tools</li>
	<li>The Design Funnel Manifesto: Define - Values and goals; Discover - Moods and metaphors; Generate - Ideas, define a concept; Create - A visual language (this is where components live); Design</li>
	<li>When you don’t do the above, you’re putting the cart before the worse, or the tail is wagging the dog</li>
	<li>Start with the story, it’s more memorable. </li>
	<li>“We’re just going to tell you what we need to tell you and it will just look nice.” Utilitarian approach</li>
	<li>Ask yourself, what if… any kind of question that you ask yourself that gives an unreasonable constraint gets your creative juice flowing</li>
	<li>Card trick - Are there sections? Consider transitions. Is it finished? Emphasize the flaws</li>
	<li>Ask yourself “What problem does this solve?”; “Is this congruent with the story?”</li>
	<li>When you look at something from the same angle all the time, the inconsistencies start becoming invisible.</li>
	<li>“Where does this fail?”</li>
	<li>Don’t pick the low hanging fruit. Sketch past the first ideas that pop into your head.</li>
	<li>Zoom in, Zoom out. It’s important to zoom in to components, but you need to zoom out. (big picture)</li>
	<li>The Organized Mind by Daniel J. Levitin</li>
	<li>Focus on the problem - don’t let the tail wag the dog</li>
	<li>Your work does not define you. Make mistakes.</li>
	<li>Recognize your uniqueness </li>
</ul>

<h3>Q&amp;A</h3>



<b>Q:</b> Do you think design patterns are bad?
<br><b>A:</b> No

<b>Q:</b>  What do you think the reason is for designs on the web looking the same?
<br><b>A:</b> Laziness. People have an idea that if Facebook does it, they must know what they’re doing, so let’s do that. 

<b>Q:</b>  Isn’t sameness good for UX?
<br><b>A:</b> I don’t they it’s either or, they’re not mutually exclusive. Tell a story and have something creative. 

<b>Q:</b> Do you think there’s a chance that there’s a emergence in what you see is what you get. Do you think these are responsible for sameness or design as the final product be in the hands of the user?
<br><b>A:</b> With Squarespace you need to know the function of what they are. They enable people to create a quick website.

<b>Q:</b> Is there a longevity thing? The best gig you could get as a web developer is a website for a movie. It will be useful for 4 weeks and then it will get removed.
<br><b>A:</b> Creative doesn’t mean that you’re going to add a logo somewhere else other than the top left. Creative is telling a story with a website.

<h3>My takeaway</h3>

We’re all struggling with sameness on the web. Story telling is the way to solve this crisis. Plain and simple.

<h2>Ulrika Malmgren - How testers can be a liability</h2>

<a href="https://twitter.com/ulrikama" target="_blank" rel="noopener">@ulrikama</a>

<ul>
	<li>Don’t test quality in - you need to build it in (don’t rely on someone catching your bugs, build your code strong from the beginning)</li>
	<li>Testers break stuff - MYTH</li>
	<li>Testing is very creative, you have to think of so many different things and ways to break what your given</li>
	<li>Testing is about understanding why, for whom and how; visualizing what know and what we’re missing; performing actions to have more info.</li>
	<li>Programmers can’t test their own code MYTH</li>
	<li><a href="https://rework.withgoogle.com/blog/five-keys-to-a-successful-google-team/" target="_blank" rel="noopener">The five keys to a successful Google Team</a> - Google</li>
	<li><a href="http://cci.mit.edu/mciresearchpage.html" target="_blank" rel="noopener">Measuring Collective Intelligence</a> - MIT</li>
	<li><a href="http://www.satirworkshops.com/wp-content/uploads/2009/06/SatirTemperatureReading.pdf" target="_blank" rel="noopener">Temperature Reading</a> - Virginia Satir</li>
	<li>How you communicate with your team is affecting how well you can perform</li>
	<li>If it’s always the loud persons ideas that get heard, are they always the best of ideas?</li>
	<li>User Story Mapping (book) - Looking at the users experience of something and having that as the baseline of how you organize your work.B2D - Behavior Driven Development</li>
	<li>B2D - Behavior Driven Development</li>
	<li>How you understand the complexity, the goal and everyone part in achieving it will impact your success. </li>
	<li>Unit test vs. Integration test</li>
	<li>Programmers - test your own stuff; focus and learn</li>
	<li>All team members - Don’t frown on soft values and exercises</li>
	<li>See testers as ambassadors for quality; raise the knowledge level of your team; reflect on communication; work with understanding; sharpen your tools.</li>
	
</ul>

<b>Q:</b> You made a good point about everyone being involved in testing. How does that work with planning of a project. When we got over budget, testing was always cut. How can we make sure that QA and testing of our product becomes an integral part of the product
<br><b>A:</b> Invite testers/QA team members in the early conversations; during actual development during the small feedback slices so it doesn’t have to be in the end. 

<b>Q:</b> When there’s a disparagement of design and development is there a better way to make those align better?
<br><b>A:</b> When things are worked on simultaneously everyone is on the same page. Pairing designers with developers early on will give better feedback.

<b>Q:</b> What are your thoughts on traditional user testing; behind mirror scenarios. 
<br><b>A:</b> Two completely different purposes; when you talk to users is to get information from them, the automation is to make sure that nothing is broken. Automation is good for the purpose of giving reliability. User testing is more about learning things and the problem area

<b>Q:</b> Complexity of tests will give more respect to testers?
<br><b>A:</b> There are separate areas in a sense, I like the idea of not having testers doing monkey work. Having those people be able to do more creative work would be nice.

<h3>My takeaway</h3>

Testing (QA) is highly underrated. What I've realized recently is that, as developers, we use QA as a safety net (it's cool if it doesn't really work the way it should, QA will let me know); this is something that Ulrika touched on and something that I'll make a conscious improvement on with my team as well as myself. Another interesting point is involving the QA team/person from the beginning will help you avoid bigger headaches down the road. 

<h2>Sara Soueidan - SVG in Motion (A Case Study)</h2>

<a href="https://twitter.com/SaraSoueidan" target="_blank" rel="noopener">@SaraSoueidan</a>

<ul>
<li>She's the front-end developer behind the new Smashing Magazine website</li>
<li>Every time design needs to be changed because CSS is shit, a kitten dies somehwere - Lea Verou</li>
<li>Awesome CSS hack (too long to jot down)</li>
<li>box-decoration-break - not supported in all bowsers yet</li>
<li>dowebsitesneedtolookthesameineverybrowser.com (NO)</li>
<li>Creating links that down overlap the descendents of the link</li>
<li>Custom list bullets / CSS Counters allow us to number a list of items of any type (headings, figures, etc), numbers are then incremented per element. </li>
<li>Not only should the image be a good candidate for SVG, but SVG should also be a good candidate for the image.</li>
<li>Some screen readers read uppercase words as individual letters (use text-transform:uppercase)</li>
<li>The web is accessibly and we are the ones who break it. If we break it, we should fix it.</li>
<li>font-size: calc(16px + 3vw); - for responsive headers</li>
</ul>

<b>Q:</b> In what form and grade of completion did dan deliver mockups
<br><b>A:</b> He delivered photoshop files, but those were useless because I don’t have photoshop. I just opened the images and started coding.

<b>Q:</b> What browser and operating systems are supported and how (for the new Smashing Magazine website)?
<br><b>A:</b> We didn’t care about IE8. We’re not optimizing for old browsers but we’re providing the basic functionality. We might remove js from IE8. Progressive enhancement is good for your health. 

<b>Q:</b> Impact on performance (calc)
<br><b>A:</b> I’ve asked a few experts and it has no impact on performance at all.

<h3>My takeaway</h3>

Mind blown. The calc example for responsive typography was something I wasn't aware of before and will definitely be implmenting as soon as I get back to New York. I wasn't able to take as many notes because I was too busy being amazed (I did take plenty of screenshots though). Sara's the front-end developer behind the new Smashing Magazine being created. Hands down my favorite talk so far.

<h2>Jeremy Keith - Resilience</h2>

<ul>
	<li>Pastels law</li>
	<li>If you receive a packet and it’s badly formed, do what you have to do with it and don’t be a dick about it.</li>
	<li>But if you’re going to be sending these packets, make it as organized as possible.</li>
	<li>Be liberal in what you accept.</li>
	<li>3 step approach
	<ul>
	<li>Step 1 identify core functionality</li>
	<li>Step 2 Make that functionality available using the simplest technology</li>
	<li>Step 3 enhance!</li>
	</ul>
	</li>
	<li>Services workers - websites that work off line</li>

</ul>

<h3>No Q+A</h3>

<h3>My takeaway</h3>

Let’s make a web that’s resilient in the way it works. Yup, got it.

View <a href="http://julian.is/article/smashingconf-barcelona-2016-day-2/">day 2 notes</a>