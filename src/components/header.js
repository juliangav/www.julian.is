import React from 'react'
import GlobalNav from './modules/GlobalNav'
import GlobalLogo from './modules/GlobalLogo'

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
