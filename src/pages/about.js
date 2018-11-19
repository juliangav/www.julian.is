import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const About = () => (
  <Layout>
    <h1>Hi from the About Page</h1>
    <p>Welcome to page 234</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
