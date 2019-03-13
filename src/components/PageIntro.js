import React from 'react'

const PageIntro = ({ PageTitle, ArticleDate, ArticleTime, ArticleTags }) => (
  <div className="page-intro">
    <div class="inner-wrap">
      <h1>{PageTitle}</h1>
      {ArticleDate && (
        <p class="post-meta">
          <span class="post-date">{ArticleDate}</span>
          <span class="post-reading-time">{ArticleTime}</span>
        </p>
      )}
      {ArticleTags && <p class="post-tags">{ArticleTags}</p>}
    </div>
  </div>
)

export default PageIntro
