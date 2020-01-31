import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/tagArea.scss'

const TagArea = props => {
  const tagListArr = []
  props.tag.forEach(tag => {
    tagListArr.push(
      tag.link ? (
        <li className="tagAreaTag" key={tag.text}>
          <a
            className="tagAreaTag__link"
            href={tag.link}
            target="_blank"
            rel="noopener noreferrer">
            <p className="tagAreaTag__text">
              {tag.icon && <FontAwesomeIcon icon={[tag.prefix, tag.icon]} />}
              {tag.text}
            </p>
          </a>
        </li>
      ) : (
        <li className="tagAreaTag">
          <p className="tagAreaTag__text">
            {tag.icon && <FontAwesomeIcon icon={[tag.prefix, tag.icon]} />}
            {tag.text}
          </p>
        </li>
      ),
    )
  })
  return <ul className="tagArea">{tagListArr}</ul>
}

export default TagArea
