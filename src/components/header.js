import React from 'react'
import GlobalNav from './GlobalNav'
import GlobalLogo from './GlobalLogo'

const Header = ({ siteTitle }) => (
  <header
    className="site-header"
    style={{
      background: 'white',
      textDecoration: 'none',
    }}
  >
    <div className="inner-wrap">
      <GlobalLogo />
      <GlobalNav />
    </div>
  </header>
)

export default Header
