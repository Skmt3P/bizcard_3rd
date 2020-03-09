import React from 'react'
import TagArea from '../components/tagArea'
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
  const tag = [
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
