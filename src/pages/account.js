import React from "react"
import { login, logout, isAuthenticated } from "../utils/auth"
import Loader from "../components/loader"
import Layout from "../components/layout"

const Account = () => {
    if (!isAuthenticated()) {
        login()
        return <Loader />
    }

    return (
        <Layout>
        <nav className="text-blue-600">
            <a
                href="#logout"
                onClick={e => {
                    logout()
                    e.preventDefault()
                }}
            >
                Log Out  (account.js)
            </a>
        </nav>
        <p>FIX ME</p>
        </Layout>
    )
}

export default Account