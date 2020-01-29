import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 1200) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      console.log(data, props.filepath)
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filepath)
      })
      if (!image) return
      const imageSizes = image.node.childImageSharp.sizes
      return <Img sizes={imageSizes} />
    }}
  />
)
