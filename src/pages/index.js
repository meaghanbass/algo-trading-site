import React from "react"
// import { Link } from "gatsby"
import "../styles/styles.scss"
import "../styles/imports.css"
import Layout from "../components/layout"
import DefaultContents from "../components/defaultContents"

export default ({children}) => (
    <Layout>
        <div>
            <DefaultContents />
            {children}
        </div>
    </Layout>
)