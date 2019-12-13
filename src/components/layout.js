import React from "react"
import "../styles/styles.scss"
import "../styles/imports.css"
import PublicSidebar from './publicsidebar'
import PrivateSidebar from './privatesidebar'
import Header from './header'
import Panel from './panel'

const Layout = ({children}) => {
    return (
        <>
        <Header />
        <div id="wrapper" className="container py-10 flex flex-row">            
            <aside className="w-1/4 float-left flex flex-col m-4 font-light">
                <Panel>
                    <PublicSidebar />
                    <PrivateSidebar />
                </Panel>
            </aside>
            
            <main className="w-3/4 m-4">
                <Panel>
                    {children}
                </Panel>
            </main>
        </div>
        </>
    )
}

export default Layout;