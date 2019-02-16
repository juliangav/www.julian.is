import React from 'react'

const ArticleFeed = () => (
  <div class="blog-feed">
    <div class="inner-wrap">
      <header class="section-header">
        <h2>Latest stuff I've written</h2>
      </header>
      <div class="blog-feed__wrap">
        <article class="cf-item">
          <figure class="cf-ico">
            <img
              src="/assets/aico-serverside-split-testing.svg"
              alt="Server-Side Split Testing for Static Websites"
            />
          </figure>
          <time class="cf-date">
            <span>
              <b>Oct 28</b> <br /> 2018
            </span>
          </time>

          <div class="cf-content">
            <h2 class="cf-title">
              <a href="/article/server-side-split-testing/">
                Server-Side Split Testing for Static Websites
              </a>
            </h2>

            <p class="cf-excerpt">
              {' '}
              When to use, when to avoid, and setting up your A/B testing stack.
            </p>
          </div>
        </article>

        <article class="cf-item">
          <figure class="cf-ico">
            <img
              src="/assets/aico-css-grid-at-scale.svg"
              alt="How We Adopted CSS Grid at Scale"
            />
          </figure>
          <time class="cf-date">
            <span>
              <b>Mar 1</b> <br /> 2018
            </span>
          </time>

          <div class="cf-content">
            <h2 class="cf-title">
              <a href="/article/css-grid-at-scale/">
                How We Adopted CSS Grid at Scale
              </a>
            </h2>

            <p class="cf-excerpt">
              {' '}
              From team buy-in to fallbacks, here's the approach we took at
              Thomas with the implementation of CSS Grid.
            </p>
          </div>
        </article>

        <article class="cf-item">
          <figure class="cf-ico">
            <img
              src="/assets/aico-dont-fight-the-notch.svg"
              alt="Don't Fight The Notch — Designing for the iPhone X"
            />
          </figure>
          <time class="cf-date">
            <span>
              <b>Oct 17</b> <br /> 2017
            </span>
          </time>

          <div class="cf-content">
            <h2 class="cf-title">
              <a href="/article/iphone-x-notch/">
                Don't Fight The Notch — Designing for the iPhone X
              </a>
            </h2>

            <p class="cf-excerpt">
              {' '}
              Coming to terms with the notch on the iPhone X and its effect on
              mobile design.
            </p>
          </div>
        </article>

        <article class="cf-item">
          <figure class="cf-ico">
            <img
              src="/assets/aico-ab-testing-lessons-learned.svg"
              alt="Lessons Learned After Running 300 A/B Tests on 20 Different Websites"
            />
          </figure>
          <time class="cf-date">
            <span>
              <b>Aug 16</b> <br /> 2017
            </span>
          </time>

          <div class="cf-content">
            <h2 class="cf-title">
              <a href="/article/ab-testing-lessons-learned/">
                Lessons Learned After Running 300 A/B Tests on 20 Different
                Websites
              </a>
            </h2>

            <p class="cf-excerpt">
              {' '}
              Over the past 2 years I’ve dedicated part of my career to building
              a conversion rate optimization (CRO) team from the ground up.
              Here's what I've learned.
            </p>
          </div>
        </article>

        <article class="cf-item">
          <figure class="cf-ico">
            <img
              src="/assets/aico-static-jamstack.svg"
              alt="Static Websites + JAMstack = <3"
            />
          </figure>
          <time class="cf-date">
            <span>
              <b>Apr 25</b> <br /> 2017
            </span>
          </time>

          <div class="cf-content">
            <h2 class="cf-title">
              <a href="/article/static-websites-and-jamstack/">
                Static Websites + JAMstack = &lt;3
              </a>
            </h2>

            <p class="cf-excerpt">
              {' '}
              Let's rethink the way we build websites with a more fast, secure,
              and flexible approach.
            </p>
          </div>
        </article>

        <article class="cf-item">
          <figure class="cf-ico">
            <img
              src="/assets/aico-progressive-web-apps.svg"
              alt="Progressive Web Apps — The Next Step in Responsive Web Design"
            />
          </figure>
          <time class="cf-date">
            <span>
              <b>Mar 20</b> <br /> 2017
            </span>
          </time>

          <div class="cf-content">
            <h2 class="cf-title">
              <a href="/article/progressive-web-apps/">
                Progressive Web Apps — The Next Step in Responsive Web Design
              </a>
            </h2>

            <p class="cf-excerpt">
              {' '}
              PWAs are here to stay, and using them today could improve the
              engagement, bounce rate, and conversion rates of your website.
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
)

export default ArticleFeed
