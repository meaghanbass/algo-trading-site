import React from "react"
// import { Link } from "gatsby"

const panel = {
    minWidth: '300px',
    backgroundColor: 'white',
    boxShadow: '3px 3px 5px #dedfde',
    borderLeft: '1px solid #efefef',
    borderTop: '1px solid #efefef'
}

const Panel = ({children}) => (
    <div className="p-4" style={panel}>
        {children}
    </div>
)

export default Panel