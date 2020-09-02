import React from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom'
function SideBar() {
    return (
        <div className="sidebar">
                <div>DASHBOARD</div>
                <Link to="/component" target="blank" style={{textDecoration:'none',color:'black'}}>
                UNIVERSITY
                </Link>
                <div style={{textDecoration:'none',marginTop:'50px'}}>SYSTEM</div>
        </div>
    )
}

export default SideBar
