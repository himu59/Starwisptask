import React from 'react'
import SideBar from './SideBar'
import './quatation.css'
function Quatation() {
    const row = (
        <div className="row">
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
        </div>
    )
    return (
        <div className="main-quatation">
            <SideBar></SideBar>  
            <div className="quatation">
                <h1 className="quat">QUATATION</h1>          
                <div className="boxes">
                    <div className="row">
                        <div className="cell">S.No</div>
                        <div className="cell">University Name</div>
                        <div className="cell">No. of S</div>
                        <div className="cell">No. of EM</div>
                        <div className="cell">Contact detail</div>
                        <div className="cell">Verify</div>
                    </div>
                    {row}{row}{row}{row}{row}{row}{row}{row}{row}{row}{row}{row}{row}{row}
                </div>
            </div>
        </div>
    )
}

export default Quatation
