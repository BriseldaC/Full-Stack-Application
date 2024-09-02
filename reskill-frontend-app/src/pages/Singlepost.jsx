// eslint-disable-next-line no-unused-vars
import React from "react"
import Nav from "../components/Nav"
import HeadSP from "../components/HeadSP"
import NavigationSP from "../components/NavigationSP"

function Singlepost(){
    return(
        <div>
            <Nav/>
            <HeadSP/>
            <div className="pt-[80px]"><NavigationSP/></div>
        </div>
    )
}
export default Singlepost