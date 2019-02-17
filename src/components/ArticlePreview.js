import React from 'react'
import { Link } from 'gatsby'

const ArticlePreview = props => (
  <article class="cf-item">
    <figure class="cf-ico">{props.icon}</figure>
    <time class="cf-date">
      <span>{props.date}</span>
    </time>

    <div class="cf-content">
      <h2 class="cf-title link-style">
        <Link to={props.path}>{props.title}</Link>
      </h2>

      <p class="cf-excerpt">{props.description}</p>
    </div>
  </article>
)

export default ArticlePreview
