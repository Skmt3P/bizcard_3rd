import React from 'react'
import TagArea from '../components/tagArea'
import '../utils/fontawesome'
import '../styles/dialog.scss'

const Dialog = props => {
  const dialogClassName = props.dialogVisible
    ? 'mainDialog'
    : 'mainDialog--hidden'
  const headingEl =
    props.dialogCategory === 'about' ? (
      <h3 className="mainDialogField__heading">
        About me and <br /> What I do.
      </h3>
    ) : props.dialogCategory === 'fav' ? (
      <h3 className="mainDialogField__heading">
        What I love or <br /> be interested in.
      </h3>
    ) : (
      <h3 className="mainDialogField__heading">My latest activity.</h3>
    )
  const tag =
    props.dialogCategory === 'about'
      ? [
          {
            text: 'Web Developer',
            prefix: 'fas',
            icon: 'male',
          },
          {
            text: 'ICT Consultant',
            prefix: 'fas',
            icon: 'male',
          },
          {
            text: 'ICT Lecturer',
            prefix: 'fas',
            icon: 'male',
          },
          {
            text: 'President',
            prefix: 'fas',
            icon: 'male',
          },
          {
            text: 'HTML5',
            prefix: 'fas',
            icon: 'code',
          },
          {
            text: 'CSS',
            prefix: 'fas',
            icon: 'code',
          },
          {
            text: 'PostCSS',
            prefix: 'fas',
            icon: 'code',
          },
          {
            text: 'SASS/SCSS',
            prefix: 'fas',
            icon: 'code',
          },
          {
            text: 'Vue',
            prefix: 'fas',
            icon: 'code',
          },
          {
            text: 'NUXT',
            prefix: 'fas',
            icon: 'code',
          },
          {
            text: 'React',
            prefix: 'fas',
            icon: 'code',
          },
          {
            text: 'Gatsby',
            prefix: 'fas',
            icon: 'code',
          },
          {
            text: 'Node.js',
            prefix: 'fas',
            icon: 'code',
          },
          {
            text: 'P5.js',
            prefix: 'fas',
            icon: 'code',
          },
          {
            text: 'Git',
            prefix: 'fas',
            icon: 'code',
          },
          {
            text: 'Docker',
            prefix: 'fas',
            icon: 'code',
          },
          {
            text: 'Restful API',
            prefix: 'fas',
            icon: 'code',
          },
          {
            text: 'Graph QL',
            prefix: 'fas',
            icon: 'code',
          },
          {
            text: 'SQL',
            prefix: 'fas',
            icon: 'code',
          },
        ]
      : props.dialogCategory === 'fav'
      ? [
          {
            text: 'Company',
          },
          {
            text: 'Resume',
          },
          {
            text: 'Output',
          },
          {
            text: 'LinkedIn',
          },
          {
            text: 'Twitter',
          },
          {
            text: 'Facebook',
          },
          {
            text: 'Skype',
          },
          {
            text: 'Github',
          },
          {
            text: 'Donation',
          },
        ]
      : []
  const emitClick = () => {
    console.log(props)
    props.onEventCallback({
      name: 'Dialog',
      type: 'click',
    })
  }

  return (
    <div className={dialogClassName}>
      <button
        onClick={() => {
          emitClick()
        }}
        className="mainDialogCloseButton"
      />
      <div className="mainDialogField">
        {headingEl}
        <div className="mainDialogField__tag">
          <TagArea tag={tag} />{' '}
        </div>{' '}
      </div>
    </div>
  )
}

export default Dialog
