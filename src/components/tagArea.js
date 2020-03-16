import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/tagArea.scss'

const TagArea = props => {
  const tagListArr = []
  if (Array.isArray(props.tag) && props.tag && props.tag.length > 0) {
    props.tag.forEach(tag => {
      tagListArr.push(
        tag.link ? (
          <li className="tagAreaTag" key={tag.text}>
            <a
              className="tagAreaTag__link"
              href={tag.link}
              target="_blank"
              rel="noopener noreferrer">
              <span className="tagAreaTag__inner">
                {tag.icon && <FontAwesomeIcon icon={[tag.prefix, tag.icon]} />}
                <span className="tagAreaTag__text">{tag.text}</span>
              </span>
            </a>
          </li>
        ) : (
          <li className="tagAreaTag">
            <span className="tagAreaTag__inner">
              {tag.icon && <FontAwesomeIcon icon={[tag.prefix, tag.icon]} />}
              <span className="tagAreaTag__text">{tag.text}</span>
            </span>
          </li>
        ),
      )
    })
  }
  return <ul className="tagArea">{tagListArr}</ul>
}

export default TagArea
