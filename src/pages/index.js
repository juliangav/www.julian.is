import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import SiteIntro from '../components/SiteIntro'
import ArticleFeed from '../components/ArticleFeed'
import ArticlePreview from '../components/ArticlePreview'

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Helmet
        title={`Julian Gaviria — Web Designer`}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <SiteIntro />
      <ArticleFeed header="Latest stuff I've written" cta="View All Articles">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <ArticlePreview
            key={node.id}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            description={node.frontmatter.description}
            icon={node.frontmatter.icon}
            path={node.frontmatter.path}
          />
        ))}
      </ArticleFeed>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM DD YYYY")
            description
            icon
            path
          }
          excerpt
        }
      }
    }
  }
`
