import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const PublicSidebar = ({children, data}) => (
    <StaticQuery
        query={graphql`
            query PublicQuery {
                statistics: allMarkdownRemark(filter: {frontmatter: {tags: {in: "statistics"}, authRequired: {eq: false}}}) {
                    totalCount
                    edges {
                        node {
                        frontmatter {
                            title
                        }
                        fields {
                            slug
                        }
                        }
                    }
                }
                learning: allMarkdownRemark(filter: {frontmatter: {tags: {in: "learning"}, authRequired: {eq: false}}}) {
                    totalCount
                    edges {
                        node {
                        frontmatter {
                            title
                        }
                        fields {
                            slug
                        }
                        }
                    }
                }
            }
        `}
        render={data => (
            <div>
                <p className="text-blue-600">Public Resources</p>
                <p>Statistics</p>
                {data.statistics.edges.map(({ node }) => (
                <div className="ml-6" key={node.id}>
                    <Link to={node.fields.slug}>
                    <p>
                        {node.frontmatter.title}{" "}
                    </p>
                    </Link>
                </div>
                ))}

                <p>Learning</p>
                {data.learning.edges.map(({ node }) => (
                <div className="ml-6" key={node.id}>
                    <Link to={node.fields.slug}>
                    <p>
                        {node.frontmatter.title}{" "}
                    </p>
                    </Link>
                </div>
                ))}
            </div>
        )}
    />
);

export default PublicSidebar;