import React, { useState } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'
import TagArea from '../components/tagArea'
import Dialog from '../components/dialog'
import '../utils/fontawesome'
import '../styles/top.scss'

const IndexPage = () => {
  const [dialogVisible, setDialogVisible] = useState(false)
  const [dialogCategory, setDialogCategory] = useState('')
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
  const changeDialogVisible = category => {
    const setCategory = category ? category : ''
    setDialogCategory(setCategory)
    setDialogVisible(!dialogVisible)
  }
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
        </h2>{' '}
        <div className="mainProf__tag">
          <TagArea tag={tag} key={tag.text} />{' '}
        </div>{' '}
      </div>{' '}
      <div className="mainButtons">
        <button
          onClick={() => {
            changeDialogVisible('about')
          }}
          className="mainButtons__button mainButtons--red">
          <h3 className="mainButtons__text">
            {' '}
            About me and <br /> What I do.{' '}
          </h3>{' '}
        </button>{' '}
        <button
          onClick={() => {
            changeDialogVisible('fav')
          }}
          className="mainButtons__button mainButtons--blue">
          <h3 className="mainButtons__text">
            {' '}
            What I love or <br /> be interested in.{' '}
          </h3>{' '}
        </button>{' '}
        <button
          onClick={() => {
            changeDialogVisible('feed')
          }}
          className="mainButtons__button mainButtons--skyblue">
          <h3 className="mainButtons__text">My latest activity. </h3>{' '}
        </button>{' '}
      </div>{' '}
      <Dialog
        dialogVisible={dialogVisible}
        dialogCategory={dialogCategory}
        onEventCallback={() => {
          changeDialogVisible()
        }}
      />
    </Layout>
  )
}

export default IndexPage
