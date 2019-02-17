import React from 'react'

const PageIntro = props => (
  <div className="page-intro">
    <div class="inner-wrap">
      <h1>{props.PageTitle}</h1>

      <p class="post-meta">
        <span class="post-date">{props.ArticleDate}</span>
        <span class="post-reading-time">{props.ArticleTime}</span>
      </p>
      <p class="post-tags">{props.ArticleTags}</p>
    </div>
  </div>
)

export default PageIntro
