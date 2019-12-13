import React from "react"
import { Router } from "@reach/router"
import { logout, isAuthenticated, getProfile } from "../utils/auth"
import { Link } from "gatsby"

const HomeComp = ({ user }) => {
    return <p>Hi, {user.name ? user.name : "friend"}!</p>
}

const AccountComp = () => {
    if (!isAuthenticated()) {
        return <Link to="/account">Log In</Link>
    }

    const user = getProfile()

    return (
        <div className="text-right">
        {/* <Router>
            <HomeComp path="/account/" user={user} />
        </Router> */}
        <HomeComp path="/account/" user={user} />
        <Link to="/account">Account Home</Link>
        <nav className="text-blue-600">
            <a
                href="#logout"
                onClick={e => {
                    logout()
                    e.preventDefault()
                }}
            >
                Log Out
            </a>
        </nav>
        </div>
    )
}

export default AccountComp