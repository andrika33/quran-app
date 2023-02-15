import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

export const Layout = (props) => {
    return (
        <div>
            <Navbar/>
            <div className="flex overflow-hidden bg-white pt-16">
                <Sidebar/>
                <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                    <main>
                        <div className="pt-6 px-4">
                            {props.children}
                        </div>
                    </main>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
