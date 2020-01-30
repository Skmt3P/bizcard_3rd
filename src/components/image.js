import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 800) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filepath)
      })
      if (!image) return
      const imageSizes = image.node.childImageSharp.sizes
      return <Img sizes={imageSizes} />
    }}
  />
)

Image.propTypes = {
  filepath: PropTypes.string.isRequired,
}

export default Image
