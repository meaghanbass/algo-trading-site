import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const DefaultContents = () => (
    <StaticQuery
        query={graphql`
            query {
                defaultContents: allMarkdownRemark(filter: {frontmatter: {authRequired: {eq: false}}}, sort: {fields: frontmatter___date}) {
                    totalCount
                    edges {
                        node {
                            frontmatter {
                                title
                                }
                            fields {
                                slug
                                }
                            excerpt
                        }
                    }
                }
            }
        `}
        render={data => (
            <div>
                {data.defaultContents.edges.map(({ node }) => (
                <div className="w-auto border border-gray-100 overflow-hidden hover:shadow m-2" key={node.id}>
                    <div className="m-6">
                    <Link to={node.fields.slug}>
                    <p className="font-bold">
                        {node.frontmatter.title}{" "}
                    </p>
                    <p className="font-thin text-sm">
                        {node.excerpt}{" "}
                    </p>
                    </Link>
                    </div>
                </div>
                ))}
            </div>
        )}
    />
)

export default DefaultContents