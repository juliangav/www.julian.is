---

title:  "SmashingConf Barcelona 2016 Day 2 Notes"
author: Julian Gaviria
description: First day was a blast. I'm surprised to say that the second day has been even better.
excerpt: John Allsopp (Dao of Web Design) runs us through predictions, Jen Simmons amazes with CSS, and Christian Holst with conversion rate optimization techniques in ecommerce. 
tags: [ExitIntent, CRO, ABTest, Code]
time: 7 Minutes
comments: false

slug: "smashingconf-barcelona-2016-day-2"
date: "2016-10-26"


---

First day was a blast. Learned a ton of new stuff that I wasn't privy to before (and able to use in production). I'm surprised to say that the second day has been even better. Again, just a disclaimer that these notes weren't edited and they were added just as they were jotted down. Enjoy!

<h2>John Allsopp - The Mystery Speaker (<a href="http://alistapart.com/article/dao" target="_blank" rel="noopener">Dao of Web Design</a>)</h2>

<a href="https://twitter.com/johnallsopp">@johnallsopp</a> / <a href="http://webdirections.org">webdirections.org</a>

<ul>
	<li>Predictions “Computers in the future may weigh no more than 1.5 tons”</li>
	<li>Humans are bad a predicting exponential growth</li>
	<li>‘How did you go bankrupt?’ Bill asked. ‘Two ways,’ Mike said. ‘Gradually and then suddenly’ - Hemingway, the Sun Also Rises</li>
	<li>Find the things that change exponentially, they are the things that really impact the world.</li>
	<li>Moore’s law - The complexity for minimum component costs increased at a rate of roughly a factor of two per year. Carnally over the short term this rate can be expected to continue, if not to increase.</li>
	<li>The best way to predict the future is to invent it - Alan Kay</li>
	<li>Prediction - “I think the browser is going to disappear” “Platforms are going to go away; computing will be everywhere because hardware will get cheaper and cheaper and cheaper” “The screen will disappear”</li>
	<li>Native apps are a remnant of the jurassic period of computer history, a local maximum that is holding us back..</li>
	<li>What is the one weird old trick about exponential growth? We need to act on our research & predictions. Carp Diem. Make good predictions, work on meaningful things and help invent that future.</li>
	
</ul>

<h3>Q&amp;A</h3>

<b>Q:</b> We’re so obsessed with Browsers as community, but there isn’t a business there?
<br><b>A:</b>The browsers are a way we can influence the web. Whichever platform donates will shape the web in their interest, even if those interests are very benign. 

<h3>My Takeaway</h3>

Predicting the future is what John’s good at. He predicted responsive design about 10 years before Ethan discovered/coined it. His take on predicting the future is interesting: don’t just predict, take action on those predictions. I jotted down a few of his future predictions which will be interesting to come back to in 10 years to see what he got right.

<h2>Laura Elizabeth - Selling Design Systems</h2>

<a href="https://twitter.com/laurium" target="_blank" rel="noopener">@laurium</a> / <a href="http://lauraelizabeth.co" target="_blank" rel="noopener">lauraelizabeth.co</a>

<ul>
	<li>The smaller of the company, the less need for a fully fledged design system. </li>
	<li>Design systems are only valuable if they’re kept up to date.</li>
	<li>Company is large enough, brand is established enough, you have the time and mentality, you’re solving a real problem.</li>
	<li>"Our design system with living UI components is the only way we can keep up with the fast growth of AWS offerings" - Amazon</li>
	<li>"Reusable components took 2-3x longer to create but gets justified  after rushing 2-3 times. And the value of that increases.”</li>
	<li>"We collected components on a master sketch file. After a week or two we bung to see huge leaps in productivity using the library when iterating on designs” - Karri Saarinen, AirBnb</li>
	<li>We’re not selling a "Design System” what we’re selling is a solution to a problem. And if you don’t have a problem, you’re just selling an artifact (costly and time consuming artifact).</li>
	<li>“You don’t need to get the clients blessing to follow your craft’s best practices” - Brad Frost</li>

</ul>

<h3>Q&amp;A</h3>


<b>Q:</b> What are the most common objections from stakeholders?
<br><b>A:</b> They don’t see the value in it, you’re not selling it well enough. 

<b>Q:</b> Shouldn’t they already be a part of our process? As a developer I don’t really need a specific tool to do my job, why do we need to sell them in the first place? 
<br><b>A:</b> In a lot of cases, yeah, having a modular design mind set is really good. But if you want to do something like Salesforce, something that’s really big and requires a budget, you’ll have to be able to justify that spend if you’re going down that route.

<b>Q:</b> Should we encourage more inconsistency? 
<br><b>A:</b> Design systems don’t have a big impact on creativity. You can still have a very creative and imaginative website with a design system. 


<h3>My takeway</h3>

It's interesting to see how little data there is in regards to how pattern libraries affect the bottom line for companies. While this seems difficult, it's for sure possible. A/B testing a website with an inconsistant design vs a website with a consistant design should give you a good understanding of what the effect of pattern libraries are (while not directly testing pattern libraries, you're testing the outcome of a pattern library). I'll be playing around with some ideas when I get back home. 

<h2>Jen Simmons - Revolutionize your page: Real Art Direction on the web</h2>

<a href="https://twitter.com/jensimmons" target="_blank" rel="noopener">@jensimmons</a> / <a href="http://jensimmons.com/" target="_blank" rel="noopener">jensimmons.com</a>

<ul>
	<li>Art direction is a conversation</li>
	<li>You can never create a new font, a new layout, a new color scheme; what you can do is associate different elements</li>
	<li>Layout should not be a multiple choice question - it should be an essay question</li>
	<li>Don’t make a frame work out of CSS Grid. CSS grid is a framework built right into the browser.</li>
	<li>We have 100 years worth of graphic design inspiration. </li>
	<li><a href="http://labs.jensimmons.com" target="_blank" rel="noopener">labs.jensimmons.com</a> - The Experimental Layout Lab of Jen Simmons</li>
	<li>Initial letter (drop caps) - property pp::first-letter {} (right now is only is safari 9 and 10)</li>
	<li>Feature queries - for browsers that don’t support use support queries: @supports (initial-letter: 4) or (-webkit-iniital-letter: 4 ) {codehere} <a href="https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/" target="_blank" rel="noopener">https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/</a></li>
	<li>margin: auto; in flexport will give you vertical centering</li>
	<li>Dropped and raised caps; Non-rectangular shapes; Images specified in both dimensions; Sizing based on edges;</li>
	<li><a href="http://flexboxdefense.com" target="_blank" rel="noopener">flexboxdefense.com</a> &amp; <a href="http://flexboxfroggy.com" target="_blank" rel="noopener">flexboxfroggy.com</a> - games to play to familiarize yourself with flex box</li>
	<li>Think about the HTML only experience. Not only for screenreaders, but what happens when Siri or Cortana wake up in a few years and start reading websites to people?</li>
	<li><a href="http://www.layout.land" target="_blank" rel="noopener">layout.land</a> - website Jen's building similar to CSS Garden</li>
	
</ul>

<h3>Q&amp;A</h3>


<b>Q:</b> How did we go back to print design for inspiration?
<br><b>A:</b> The last thing we want to do is take things from print and add them on the web. We need to take ideas from other places and print is one of them. I frequently look at film and other places, take those ideas and transform them over.

<b>Q:</b> How do we get a company to understand that we have to come up with different designs for different ways?
<br><b>A:</b> The idea that that there is one solution is a problem. 

<b>Q:</b> Thoughts on tools?
<br><b>A:</b> There is an ongoing conversion about designers learning to code, which tool, which process is the best, etc. Use any tool that’s going to get you to where it’s going to be. At some point you’ll need to hop on the browser.  


<h3>My Takeaway</h3>

A good amount of detail into how making your website look less generic through art direction and what’s currently possible through CSS.  It seems like CSS Grid Layouts have evolved since the last time I gave them ago; definitely worth giving them a second try. I had no idea that support queries were a thing. So what’s the point of using modernizr? This talk definitely disrupts my current process and one that I’m anxious to pick apart and implement once I get home. 

<h3>Slide Deck</h3>

<a href="https://speakerdeck.com/jensimmons/revolutionize-your-page-40min-fall-2016?utm_content=buffer4d7b8&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer" target="_blank" rel="noopener">https://speakerdeck.com/jensimmons/revolutionize-your-page-40min-fall-2016?utm_content=buffer4d7b8&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer</a>

<h2>Adrian Zumbrunner - Designing Choice</h2>

<a href="https://twitter.com/azumbrunnen_">@azumbrunnen_</a> / <a href="http://azumbrunnen.me" target="_blank" rel="noopener">azumbrunnen.me</a>

<ul>
	<li>Good design is about making choices.</li>
	<li>"Not choosing or letting the user decide is an abdication of the designer’s responsibility"  - Dan Saffer</li>
	<li>"We cherish the idea of having options, but we’re often better off with less choice" - Barry Schwartz</li>
	<li>Less options equals more focus and easier decision making.</li>
	<li>The value of an option is defined by it’s surroundings.</li>
	<li>Placebo choices - Deliberately adding an option can make people more decisive</li>
	<li>Importance of moments - The right moment can change the way people think about an interface</li>
	<li>Role of Friction - Design is about removing friction from interfaces to people can focus on their tasks rather than their tools.</li>
	<li>"The holistic experience that people feel when they act with total involvement" - Mihaly Csikszentmihalyi</li>
	<li>Friction can improve design and make people more deliberate</li>
	<li>Defaults can make or break the experience</li>
	
</ul>

<h3>Q&amp;A</h3>

<b>Q:</b> When it comes when trying to be unique/standout; is it just the matter of getting things right where most people fail? 
<br><b>A:</b> Utilitarian and the icing on the cake.

<b>Q:</b> <i>Missed the question, but the answer was too good to not add.</i>
<br><b>A:</b> Simple rule that you can apply, if you were that user, in the same position, how would you like to be treated. It’s your responsibility on how you would like to approach this.

<h3>My Takeaway</h3>

This talk gave me some insight as to way Apple over simplifies their products to the point where they leave some of us wanting more options; this explains in part why they're one of our generation's most popular brands. However, we sometimes have to provide placebo choices in order to influence the user and making a choice.



<h2>Christian Holst - Conversion Rate Optimization Techniques in Ecommerce</h2>

<a href="https://twitter.com/KiehnHolst" target="_blank" rel="noopener">@KiehnHolst</a> / <a href="http://baymard.com" target="_blank" rel="noopener">baymard.com</a>

<ul>
	<li>68.81% cart abandonment rate (avg. across 34 different studies)</li>
	<li>35% increase in conversion rate (average site potential for checkout optimization)</li>
	<li>$260 billion opportunity in the EU and US (35% increase in conversion rate)</li>
	<li>134 checkout design parameters in order to obtain the 35% increase in conversion rate</li>
	<li>Average site has 39 checkout usability issues in production</li>
	<li>5.08 checkout steps in 2012 > 5.42 steps in 2016</li>
	<li>Number of steps alone does not constitute a good or a bad checkout / no direct correlation</li>
	<li>14.88 fields on average, this could just be 7</li>
	<li>Home Depot: 15 form fields / Dell: 45 fields / Crutchfield: 8 form fields</li>
	<li>Focus less on the number of steps and focus more on what you users have to accomplish</li>
	<li>Date of Birth 34%, Phone, Gender - form fields that will cause uses to abandon - Make it optional</li>
	<li>Explain why certain information is required to alleviate privacy concerns.11.6% of tests subjects misinterpreted a review step for an order receipt</li>
	<li>11.6% of test subjects misinterpreted a review step for an order receipt</li>
	<li>Adaptive Error Messages - adapting the actual error message to the specific rule that caused the error message (4-10 instead of 1-2)</li>
	<li>18.75% of all account users abandoned cart</li>
	<li>Set fewer password creating options</li>

</ul>

  

<b>Q:</b> Scrolling, pagination, load more button?
<br><b>A:</b> Load more works the most, natural pause in that flow.

<b>Q:</b> "Secured by" msgs?
<br><b>A:</b> Users perceive different parts of a page to be more sensitive; they perceive different parts due to visual design more secure. Users have small technical understanding of this.  

<b>Q:</b> Best practices for email verification fields? What would be a better way to make sure that the email is right?
<br><b>A:</b>  It’s above 50% of all users that copy and paste their email address. Disable copy and paste

<h3>My Takeaway</h3>

This was pretty good insight in regards to user testing in ecommerce sites (the majority of my testing is for content marketing websites). THere are a few things that I could transfer over; e.g. form fields that convert less, infinit scrolling vs pagination vs load more button, etc.

<h2>Maciej Ceglowski - The Website Obesity Crisis</h2>

<a href="https://twitter.com/baconmeteor" target="_blank" rel="noopener">@baconmeteor</a> / <a href="http://idlewords.com" target="_blank" rel="noopener">idlewords.com</a>

<ul>
	<li>Chickenshit Minimalism </li>
	<li>Taft test - if images on a website are replaced with Taft and it improves the experience, you don’t need the images.</li>
	<li><a href="http://www.webbloatscore.com/">www.webbloatscore.com</a> Web bloat score calculator </li>
</ul>



<b>Q:</b> Keep inventing random things to feel inventive?
<br><b>A:</b> Maybe not to let the stupidity overwhelm, but that’s how i keep myself from drinking.

<b>Q:</b> The bubble is quivering do you think there’s a chance of a burst?
<br><b>A:</b> I don’t think of it as a bubble, but as a blister. Even 5 years ago a lot of us thought the bubble was going to end, but it hasn’t. Now we’re in this long endless period of easy money and it hasn’t been healthy. 

<h3>My takeaway</h3>

By this time my fingers were already hurting from taking so many notes. But the gist of it is, we do a lot of dumb stuff on the web just because we can; this is how the internet of things came to be. Things that are created with the purpose of simplifying our life are actually complicating it. Lets be conscious of not overdoing it with unneeded functionality. 