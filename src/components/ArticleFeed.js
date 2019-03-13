import React from 'react'
import { Link } from 'gatsby'

const ArticleFeed = ({ header, children, cta }) => (
  <div class="blog-feed">
    <div class="inner-wrap">
      {header && (
        <header class="section-header">
          <h2>{header}</h2>
        </header>
      )}
      <div class="blog-feed__wrap">{children}</div>
      {cta && (
        <h3 class="view-all-link link-style">
          <Link to="/articles/">{cta}</Link>
        </h3>
      )}
    </div>
  </div>
)

export default ArticleFeed