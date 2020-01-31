import React, { forwardRef } from 'react'
import Image from './image'

const Header = forwardRef((props, ref) => {
  return (
    <header className="header" ref={ref}>
      <h1 className="headerHeading">
        <Image filepath={props.filepath} />{' '}
      </h1>{' '}
    </header>
  )
})

export default Header
