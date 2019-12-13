import React from "react"
// import { Router } from "@reach/router"
import { isAuthenticated } from "../utils/auth"
import { Link, StaticQuery, graphql } from "gatsby"
// import "../styles/styles.scss"
import Button from "../components/button"

const PrivateSidebar = ({data}) => {
    if (!isAuthenticated()) {
        // return null
        return <div className="mt-4"><Button>Log In to View Private Files</Button></div>
    }

    return (
        <>
            <StaticQuery
                query={graphql`
                    query PrivateQuery {
                        allMarkdownRemark(filter: {frontmatter: {authRequired: {eq: true}}}) {
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
                        <p className="text-blue-600 mt-4">Private Scripts</p>
                        {data.allMarkdownRemark.edges.map(({ node }) => (
                        <div key={node.id}>
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
        </>
    )
}

export default PrivateSidebar