import React from 'react'

const ArticleAside = props => (
  <div class="article__table-of-contents">
    <h3 class="article__aside__header">Table of Contents</h3>

    <nav id="TableOfContents">
      <ul>
        <li>
          <ul>
            <li>
              <a href="#the-problem-with-client-side-split-testing" class="">
                The Problem with Client-Side Split Testing
              </a>
            </li>
            <li>
              <a href="#how-server-side-split-testing-solves-this" class="">
                How Server-Side Split Testing Solves This
              </a>
            </li>
            <li>
              <a href="#splitting-traffic-at-the-server-level" class="">
                Splitting Traffic at the Server Level
              </a>
            </li>
            <li>
              <a href="#tracking-experiment-results">
                Tracking Experiment Results
              </a>
            </li>
            <li>
              <a href="#in-conclusion">In Conclusion</a>
            </li>
            <li>
              <a href="#resources">Resources</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
)

export default ArticleAside
