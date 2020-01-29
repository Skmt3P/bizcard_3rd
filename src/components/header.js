import React from 'react'
import Image from './image'

export default props => (
  <header class="header">
    <h1 class="headerHeading">
      <Image filepath={props.filepath} />
    </h1>
  </header>
)
