import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'
import '../styles/top.scss'

const IndexPage = () => (
  <Layout filepath={'logo_yoko_bk.png'}>
    <SEO title="Skmt3P" />
    <div className="mainProf">
      <div className="mainProf__image">
        <Image filepath={'icon_main.png'} />
      </div>
      <h2 className="mainProf__text">
        <p className="mainProf__name">Ryu Sakamoto</p>
        <a
          className="mainProf__link"
          href="https://omusbridge.com"
          target="_blank"
          rel="noopener noreferrer">
          OmusBridge OÜ
        </a>
        <br />
        President.
      </h2>
    </div>
    <div className="mainButtons">
      <div className="mainButtons__button mainButtons--red">
        <h3 className="mainButtons__text">About me.</h3>
      </div>
      <div className="mainButtons__button mainButtons--blue">
        <h3 className="mainButtons__text">What I do.</h3>
      </div>
      <div className="mainButtons__button mainButtons--skyblue">
        <h3 className="mainButtons__text">
          What I like or <br /> be interested in.
        </h3>
      </div>
    </div>
  </Layout>
)

export default IndexPage
