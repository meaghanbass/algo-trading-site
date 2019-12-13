import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
// import Panel from "../components/panel"
import PDF from "../../static/pdf.svg"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
    
      <div className="mkd">
        <div className="pdf flex flex-row items-center">
          <Link className="text-xs mr-1" to="/">Printer Friendly</Link>
          <PDF />
        </div>
        <h1 className="theme-font mb-4">{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`