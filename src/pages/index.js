import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout filepath={'logo_yoko_bk.png'}>
    <SEO title="Skmt3P" />
    <h1> This page is under construction! </h1>{' '}
    <p>
      Please visit{' '}
      <a
        href="https://2019.skmt3p.com"
        target="_blank"
        rel="noopener noreferrer">
        {' '}
        2019 BizCard{' '}
      </a>
      !{' '}
    </p>{' '}
  </Layout>
)

export default IndexPage
