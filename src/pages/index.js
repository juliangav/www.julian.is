import React from 'react'

import Layout from '../components/layout'

import SiteIntro from '../components/SiteIntro'
import ArticleFeed from '../components/ArticleFeed'

const IndexPage = () => (
  <Layout>
    <SiteIntro />
    <ArticleFeed />
  </Layout>
)

export default IndexPage
