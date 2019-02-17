import React from 'react'

const NewsletterSub = props => (
  <section class="subscribe-module">
    <div class="inner-wrap">
      <header class="subscribe-module__header">
        <h2>Subscribe to my articles</h2>
        <p>
          I won't bug you much, just a heads up for whenever I publish anything
          new.
        </p>
      </header>
      <div id="mc_embed_signup" class="subscribe-module__form">
        <form
          action="//julian.us14.list-manage.com/subscribe/post?u=e9ab548a9c3a7062bb0ad1f2a&amp;id=c08c6bdfaf"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <div class="mc-field-group">
              <label for="mce-EMAIL" class="mc-label">
                Email:*
              </label>
              <input
                type="email"
                name="EMAIL"
                class="required email"
                id="mce-EMAIL"
                placeholder="Your Email Address"
              />
            </div>
            <div id="mce-responses" class="clear">
              <div
                class="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              />
              <div
                class="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              />
            </div>

            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_e9ab548a9c3a7062bb0ad1f2a_c08c6bdfaf"
                tabindex="-1"
                value=""
              />
            </div>
            <div class="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
)

export default NewsletterSub
