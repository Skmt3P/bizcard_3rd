import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Skmt3P" />
    <h1> This page is under construction! </h1>{' '}
    <p>
      Please visit{' '}
      <a
        href="https://2019.skmt3p.com"
        target="_blank"
        rel="noopener noreferrer">
        {' '}
        here{' '}
      </a>
      !{' '}
    </p>{' '}
    <div
      style={{
        maxWidth: `300px`,
        marginBottom: `1.45rem`,
      }}>
      <Image />
    </div>{' '}
  </Layout>
)

export default IndexPage
