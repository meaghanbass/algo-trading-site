import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
// import "../styles/styles.scss"

// const PublicSidebar = ({children}) => (
//     <div className="flex flex-col">        
//         <Link to="/sitemap">Sitemap</Link>
//         <Link to="/md-files">All Markdown Files</Link>
//         <Link to="/">Public</Link>
//         <Link to="/">Public</Link>
//         <Link to="/">Public</Link>
//     </div>
// );

// export default PublicSidebar;

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
                next: allMarkdownRemark(filter: {frontmatter: {tags: {in: "next"}, authRequired: {eq: false}}}) {
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

                <p>Next</p>
                {data.next.edges.map(({ node }) => (
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