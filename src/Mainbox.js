import React from 'react'
import './mainbox.css'
import SideBar from './SideBar';
import {Link} from 'react-router-dom'
function Mainbox(){
    return (
        <>
           <div className="maindiv">
            <SideBar></SideBar>
            <div className="mainBox">
                    <Link to="/Quatation" target="blank" className="inner1">QUATATION</Link>
                    <Link className="inner2">REVENUE</Link>
                    <Link className="inner3">PRODUCT SOLID</Link>
                    <Link className="inner4">SALES REPORT</Link>
                    <Link className="inner5">LATEST MESSAGE</Link>
                    <Link className="inner6">RECENT ACTIVITY</Link>
                    <Link className="inner7">SOCIAL INSIGHT</Link>      
            </div>
        </div>
        </>
    )
}

export default Mainbox
