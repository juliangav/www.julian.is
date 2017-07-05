---
title: "Static Websites + JAMstack = <3"
description:  Let's rethink the way we build websites with a more fast, secure, and flexible approach.
tags: [JAMstack, HeadlessCMS, StaticSiteGenerators, WebPerf]
lastmod: 2017-04-25
date: "2017-04-25"
time: 7.5 Minutes
categories:
  - "Development"
slug: "static-websites-and-jamstack"
images: ["assets/og-static-jamstack.jpg"]
comments: false


---

I'm sure that by now you've heard about how static websites are the best thing since sliced bread. If you're the type to stay on top of the latest, then you've also heard about Smashing Magazine [ditching WordPress and moving to a JAMstack](https://next.smashingmagazine.com/2017/03/a-little-surprise-is-waiting-for-you-here--meet-the-next-smashing-magazine/) (probably how you ended up here). 

JAMstack stands for JavaScript, APIs, & Markup; it’s an approach to building websites that allows you to have all the web performance and security benefits of a static website along with the dynamic capabilities of a database-driven CMS.

To present this in context, I’ll run you through the problems with dynamic websites, how we’re solving them with a static approach, and how to start putting together your own JAMstack.

<h2 id="dynamic">Problems Dynamic Websites Are Facing</h2>

Let's start with web performance. Regardless of [how well we optimize everything](/article/baseline-for-fast-loading-websites/) or how good of a job we do with with perceived performance, dynamic websites are SLOW. This is due to the amount of steps that have to take place in order to display the requested content everytime someone visits a web page. 

We’re also at a point where every website being built on [enter popular CMS name here] is being overwhelmingly loaded with plugins, scripts, and a ton of other overhead that just slows the crap out of what we ship to production.

This is in addition to security concerns, expensive hosting, and the ever-changing landscape of different languages a developer must learn to build a website.

So let's rethink our approach to building dynamic websites and start from <s>scratch</s> static.

<h2 id="static">What's a Static Website?</h2>

That Dreamweaver website you created back in college? That’s a static website — a website made up of HTML pages with pre-populated content. 

When a browser requests the URL of a static page, the server returns the static page in its entirety. There aren't calls to a database being made nor content being generated on the fly — the content is already there.

That doesn't mean we're putting together every page by hand (no way). There are different tools that address different layers of this technology stack. Yes, I'll run you through what these tools are, but first, let's go through some of the basic benefits:

<h3>Faster loading times</h3>

The fact that JAMstack websites don’t have to make any calls to a database makes the loading time exponentially quicker. 

[Matt Biilmann](https://twitter.com/biilmann), founder of Netlify, ran a test of the Smashing Magazine website (which currently runs on WordPress) against a static counterpart he cloned and deployed on Netlify. It resulted in [a website that loaded six times faster](https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/#dynamic-websites-and-caching) than the original.

If you’re not sold, keep reading (or just keep reading anyway).

<h3>Solid Security</h3>

If you’re using a popular CMS, you know about the necessary security measures. This is mostly due to the login page being available to anyone with access to the website and some basic knowledge of the specific CMS. With a static website, a login page doesn’t exist.

If you do integrate a headless CMS (more on what a headless CMS is further down) to your static website, tracking the website back to its CMS isn’t as straightforward as it is with a traditional CMS.

<h3>Front-End and CMS are Decoupled</h3>

You don't have a CMS dictating the way you should structure your content and pages. Not having a CMS tied in to the presentation layer gives you the flexibility of creating anything you want on the front-end while using the API endpoints to pull in content.


<h3>Lower cost of scaling</h3>

We’re not dealing with expensive runtimes or complicated server setups — we’re only dealing with static files being served on the client side. For smaller sites, you can get away with cheap hosting as long as you pair it with a [fast CDN](/article/baseline-for-fast-loading-websites/#cdn).

<h3>Seamless developer experience</h3>

From the developer’s perspective, the JAMstack methodology doesn’t require us to learn a different backend language to build a data-driven website. We’re able to build on our foundation of HTML, CSS, and JS to build complex websites.


Yes, I know, static sites are awesome, and I promise that setting up your JAMstack isn't all that difficult. Let's get started!

<h2 id="hosting">Step 1: Choose a Host &amp; CDN</h2>

The beauty of static websites is that you’re able to host them anywhere. ANYWHERE.

You don’t need a list of server requirements with a certain version of PHP or a specific database. All you need is a host that allows you serve HTML, CSS, and JS for a straightforward development workflow, especially when dealing with staging environments. 

I recently started playing around with the idea of moving to Amazon Web Services. I zipped up my website, uploaded it to their server, and boom, my website was ready to go live by just pointing the DNS. Because my website is static, I didn’t have to worry about transferring a database or server requirements. (It took me about 10 minutes to set this up.)

Although you are going to enjoy the flexibility (and affordability) of hosting, specially with larger scale websites, you want to make sure that you’re using a host with a fast CDN to deliver your static files. You have a bunch of options:

<h3>Netlify</h3>

Built from the ground up to host modern static websites, [Netlify](https://www.netlify.com/) (they actually coined the term “JAMstack”) understands the static concept and provide a full suite of open source products that are focused around static websites (sorta like the WP Engine of static websites). They’re also the hosting platform behind the new redesign of Smashing Magazine. Plans are relatively affordable, but if you have an open source project, they’ll host it for free.

<h3>Amazon Web Services (AWS) S3</h3>

[Amazon S3](https://aws.amazon.com/s3/) is a utility storage service that’s used for backups and content storage as well as static websites. This is an ideal [hosting setup for a JAMstack website](https://habd.as/zero-to-http-2-aws-hugo/). If it’s your first time creating an AWS account, they’ll provide free hosting for the first 12 months.  

<h3>Custom Setups with CloudFlare</h3>

If you like your current host, you can use [CloudFlare CDN](https://www.cloudflare.com/cdn/) to delegate content delivery. This gives you the flexibility to keep what you have and enjoy the benefits of a fast CDN. Setup is straight forward and not too pricey.  

<h2 id="ssgs">Step 2: Decide on a Static Site Generator</h2>

In order to avoid creating static html pages manually, you’re going to need a sturdy static site generator (SSG). An SSG is a command line interface (CLI) application — don’t run away yet, it’s a simple setup — that does all of the dynamic page generation legwork for you. (Need a primer? Here's a good [intro article on SSGs](https://davidwalsh.name/introduction-static-site-generators).)

At the time of writing, there are [457 static site generators](https://staticsitegenerators.net/) to choose from. But I’ll help you narrow down the list to the top two contenders below.

<h3>Jekyll</h3>

Built on Ruby and using Liquid as a templating engine; [Jekyll](https://jekyllrb.com/) was created eight years ago when Github founder, Tom Preston-Werner, was looking to write his own blogging engine. A very well documented SSG with the support of a massive community. It has been the de facto choice for static site generators since static websites began regaining popularity around four to five years ago. 

Although Jekyll is simple to setup, the workflow begins slow down when working on larger websites; static pages will still load fast once on the server, but the time for them to get generated locally during development starts becoming painful. 

[Healthcare.gov](https://developmentseed.org/blog/new-healthcare-gov-is-open-and-cms-free/) is one of the early high-profile websites built on Jekyll.

<h3>Hugo</h3>

Built on GoLang using it’s own templating engine; Hugo was created in 2013 by Steve Francia, Docker’s Chief Operator. Although relatively young, Hugo has the support of Smashing Magazine and its immense community; Smashing Magazine announced that [they would be ditching WordPress for Hugo](https://next.smashingmagazine.com/2017/03/a-little-surprise-is-waiting-for-you-here--meet-the-next-smashing-magazine/#the-almighty-smashing-magazine-s-redesign) in the new iteration of their website. The main reason for choosing Hugo as their SSG was the [speed in which Hugo generates its pages](https://www.youtube.com/watch?v=CdiDYZ51a2o). This was something that co-founder, Vitaly Friedman, needed to carefully take into consideration for the large number of posts the website has published since 2006. 

Transparency: I’ve used Jekyll over the past few years, and it been excellent for projects at hand; however, I tried Hugo recently and the simplicity of the installation (no complicated dependencies to get up and running) and the speed it was able to generate pages immediately won me over. I’m in the process of moving this website from Jekyll to Hugo. 

That said, plenty of people who are not me have [compared the top SSGs](https://www.smashingmagazine.com/2015/11/static-website-generators-jekyll-middleman-roots-hugo-review/) available. An SSG is the foundation of your JAMstack site, so take your time, do your homework, and choose wisely.

As awesome as SSGs are, there are a few problems rooted in the fact that it gets a bit complex for the everyday admin user that’s just looking to publish content. It’s unrealistic for us in the agency world to get non-technical team members and clients to publish content and deploy websites via CLI. 

In order to make this appealing to the masses, we need a dynamic layer in our current stack that provides a friendly admin UI…

<h2 id="headless-cms">Step 3: Select a headless CMS</h2>

CMS-based websites consist of:

* <strong>An admin UI</strong>, where the editor of the website makes content and admin changes — think of the WordPress admin.
* <strong>A database</strong>, where the content and settings of the website are stored — think of the MySQL database that you usually don’t care much about.
* <strong>An API</strong>, the endpoints that allow you to connect the content of the website to the front-end of the website — the PHP snippets that allow you to call different parts of the content at hand (e.g. the_content();).
* <strong>The front-end (the head)</strong>, the beautifully crafted website that visitors see — what you’re looking at right now is the front-end/head of my website.

Take WordPress for example. You publish content through the admin that then gets stored in a MySQL database. This content becomes available via PHP endpoints (the API), and you can then use these endpoints to grab the content you’ve created via admin and populate throughout the pages of your website. 

It’s pretty convenient, but the limitations surface instantly — the scope of these PHP endpoints is your website. (They won’t work anywhere else.)

A headless CMS removes the front-end/head (Get it? Headless!) of a website while still providing the efficiency and convenience of an admin, database, and API. It allows you to publish content without wedding you to a website/layout/template. The front-end doesn’t exist and that’s the beauty of it. 

We could grab the JS-based API endpoints provided by your headless CMS of choice and publish that content anywhere where JS is available — kind of like the Mastercard of APIs. You could also share those API endpoints with other publishers or developers that could ultimately serve as a large megaphone for your content. The possibilities are endless. (Cue inspirational music.)

<h3>Choosing between a Git-based CMS or an API-driven CMS</h3>

With a Git-based CMS you can publish content every time you push changes to Git, allowing for a seamless development workflow. This approach is a bit difficult to scale with content that you want to publish across different platforms, but it will allow for you to have a purely static website. Since it runs on Git, you won’t have a problem finding an open source CMS to work with.

With an API-driven CMS, you’re creating content that will be strictly delivered via APIs. Although you won’t be able to keep track of content changes through Git, you’ll be able to scale your content through flexible APIs. But since you are working on a platform that hosts these APIs (server bandwidth ain’t cheap) these tend to not be open-sourced and rather pricey, but some offer freemium pricing models. 

Head over to [headlesscms.org](https://headlesscms.org/) for a full list of what’s currently available. 

<h2 id="resources">Now What?</h2>

Congrats! You’re well on your way to adopting the JAMstack and reaping the benefits of static websites. This is just the beginning; developers along with stakeholders are just beginning to acknowledge the benefits and flexibility of going static; agencies are starting to break the mold by introducing the [JAMstack approach to client websites](https://snipcart.com/blog/jamstack-clients-static-site-cms); and a plethora of tools and resources are becoming available on a daily basis. Make good use of this approach and let's make the internet better.

<h3>Speaking of Tools and Resources...</h3>

I've put together the entire list of articles, tools, videos, tutorials & other resources I came across when writing this article. Enjoy!

[View Static Websites &amp; the JAMstack Resources &raquo;](/article/static-websites-and-jamstack/resources)