import React from 'react'
import Image from './image'

const Header = props => (
  <header className="header">
    <h1 className="headerHeading">
      <Image filepath={props.filepath} />
    </h1>
  </header>
)

export default Header
