import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import '../styles/feedArea.scss'

const FeedArea = () => (
  <StaticQuery
    query={graphql`
      {
        allFeedScrapbox(limit: 10) {
          edges {
            node {
              title
              link
            }
          }
        }
      }
    `}
    render={data => {
      const feeds = data.allFeedScrapbox.edges
      const feedArr = []
      if (feeds && feeds.length > 0) {
          feeds.forEach(item => {
            const feed = item.node
            feedArr.push(
              <li className="feedAreaItem">
                <a
                  className="feedAreaItem__link"
                  href = {
                    feed.link
                  }
                  target="_blank"
                  rel="noopener noreferrer">
                  <span className = "feedAreaItem__title" > {
                    feed.title
                  } </span>
                </a>
              </li>,
            )
          })
        }
      return <ul className="feedArea">{feedArr}</ul>
      // return <pre> {JSON.stringify(feed, null, 4)} </pre>
    }}
  />
)

export default FeedArea

