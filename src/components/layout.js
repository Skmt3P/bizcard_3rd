/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import 'resize-observer-polyfill'
import useResizeObserver from 'use-resize-observer'
import '../styles/layout.scss'

const Layout = props => {
  const { ref, width = 0, height = 0 } = useResizeObserver()
  const windowHeight = !!(typeof window !== 'undefined')
    ? window.innerHeight
    : 0
  const styleObj = {
    height: windowHeight - height + width - width,
  }
  return (
    <>
      <Header filepath={props.filepath} ref={ref} />{' '}
      <main className="main" style={styleObj}>
        {' '}
        {props.children}{' '}
      </main>{' '}
      <footer className="footer">
        <small className="footerCopyright">
          {' '}
          © {new Date().getFullYear()}, @Skmt3P{' '}
        </small>{' '}
      </footer>{' '}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  filepath: PropTypes.string.isRequired,
}

export default Layout
