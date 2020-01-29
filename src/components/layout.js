/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import '../styles/layout.scss'

const Layout = props => {
  return (
    <>
      <Header filepath={props.filepath} />
      <main class="main"> {props.children} </main>{' '}
      <footer class="footer">
        <small class="footerCopyright">
          {' '}
          ©{new Date().getFullYear()}, @Skmt3P{' '}
        </small>
      </footer>{' '}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  filepath: [PropTypes.node.isRequired, PropTypes.string],
}

export default Layout
