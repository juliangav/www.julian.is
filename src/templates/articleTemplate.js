import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import PageIntro from '../components/sections/PageIntro'
import ArticleContent from '../components/sections/ArticleContent'
import kebabCase from 'lodash/kebabCase'

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
        ArticleTags={post.frontmatter.tags.map((tag, index) => {
          return <Link to={`/tags/${kebabCase(tag)}/`}>#{tag}</Link>
        })}
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
