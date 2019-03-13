import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import PageIntro from '../components/PageIntro'
import ArticleContent from '../components/ArticleContent'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <Helmet
        title={`${post.frontmatter.title} | Julian Gaviria — Web Designer`}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <PageIntro
        PageTitle={post.frontmatter.title}
        ArticleDate={post.frontmatter.date}
        ArticleTime={post.frontmatter.time}
      />

      <ArticleContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </ArticleContent>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        time
        tags
      }
    }
  }
`
