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

      {/* <p class="post-tags">
        <a href="/tags/abtest">#ABtest</a>

        <a href="/tags/jamstack">#JAMstack</a>

        <a href="/tags/webperf">#WebPerf</a>

        <a href="/tags/staticwebsites">#StaticWebsites</a>

        <a href="/tags/cro">#CRO</a>
      </p> */}
    </div>
  </div>
)

export default PageIntro
