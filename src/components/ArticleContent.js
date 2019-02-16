import React from 'react'
import ArticleAside from './ArticleAside'

const ArticleContent = props => (
  <section class="site-content article-content" role="main">
    <div class="inner-wrap-wide container">
      <ArticleAside />

      <main id="main" className="article__main">
        {props.children}
      </main>
    </div>
  </section>
)

export default ArticleContent
