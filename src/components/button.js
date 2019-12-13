import React from "react"
// import "../styles/styles.scss"
import { Link } from "gatsby"

const buttonWrapper = {
    width: 'max-content'
}

const buttonWidth = {
    width: 'max-content'
}

const Button = ({children}) => (
    <Link className="m-auto block" style={buttonWrapper} to="/account">
        <button class="theme-color text-white font-sans font-thin py-2 px-4" style={buttonWidth}>
            {children}
        </button>
    </Link>
)

export default Button