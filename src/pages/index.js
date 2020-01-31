import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'
import TagArea from '../components/tagArea'
import '../utils/fontawesome'
import '../styles/top.scss'

const IndexPage = () => {
  const tag = [
    {
      link: 'https://omusbridge.com',
      text: 'Company',
      prefix: 'far',
      icon: 'building',
    },
    {
      link: 'https://velocv.com/skmt3p',
      text: 'Resume',
      prefix: 'far',
      icon: 'paper-plane',
    },
    {
      link: 'https://scrapbox.io/skmt3p/',
      text: 'Output',
      prefix: 'fas',
      icon: 'scroll',
    },
    {
      link: 'https://www.linkedin.com/in/ryu-sakamoto-91957152/',
      text: 'LinkedIn',
      prefix: 'fab',
      icon: 'linkedin',
    },
    {
      link: 'https://twitter.com/skmt3p',
      text: 'Twitter',
      prefix: 'fab',
      icon: 'twitter',
    },
    {
      link: 'https://www.facebook.com/Sakamoto3P',
      text: 'Facebook',
      prefix: 'fab',
      icon: 'facebook',
    },
    {
      link: 'https://join.skype.com/invite/lNdAlxw7id2D',
      text: 'Skype',
      prefix: 'fab',
      icon: 'skype',
    },
    {
      link: 'https://github.com/Skmt3P/open-source-activities/',
      text: 'Github',
      prefix: 'fab',
      icon: 'github',
    },
    {
      link: 'https://scrapbox.io/skmt3p/003.Make-Donations',
      text: 'Donation',
      prefix: 'fas',
      icon: 'hand-holding-usd',
    },
  ]
  return (
    <Layout filepath={'logo_yoko_bk.png'}>
      <SEO title="Skmt3P" />
      <div className="mainProf">
        <div className="mainProf__image">
          <Image filepath={'icon_main.png'} />{' '}
        </div>{' '}
        <h2 className="mainProf__text">
          <p className="mainProf__name"> Ryu Sakamoto </p>{' '}
          <a
            className="mainProf__link"
            href="https://omusbridge.com"
            target="_blank"
            rel="noopener noreferrer">
            OmusBridge OÜ{' '}
          </a>{' '}
          <br />
          President. <br />
          (※工事中:{' '}
          <a
            className="mainProf__link"
            href="https://scrapbox.io/skmt3p/2020%E5%90%8D%E5%88%BA%E3%82%B5%E3%82%A4%E3%83%88%E6%94%B9%E4%BF%AE%E6%A1%88%E5%86%85"
            target="_blank"
            rel="noopener noreferrer">
            Scrapbox{' '}
          </a>{' '}
          参照){' '}
        </h2>{' '}
        <div className="mainProf__tag">
          <TagArea tag={tag} />{' '}
        </div>{' '}
      </div>{' '}
      <div className="mainButtons">
        <div className="mainButtons__button mainButtons--red">
          <h3 className="mainButtons__text"> About me. </h3>{' '}
        </div>{' '}
        <div className="mainButtons__button mainButtons--blue">
          <h3 className="mainButtons__text"> What I do. </h3>{' '}
        </div>{' '}
        <div className="mainButtons__button mainButtons--skyblue">
          <h3 className="mainButtons__text">
            What I like or <br /> be interested in .{' '}
          </h3>{' '}
        </div>{' '}
      </div>{' '}
    </Layout>
  )
}

export default IndexPage
