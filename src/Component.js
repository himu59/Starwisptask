import React from 'react'
import SideBar from './SideBar'
import './component.css'
function Component() {
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
        <div>
            <div className="main-quatation">
                <SideBar></SideBar>  
               <div className="main-items">
                    <div className="row">
                            <div className="cell">Name</div>
                            <div className="cell">Class</div>
                            <div className="cell">No. of student</div>
                            <div className="cell">No. of teacher</div>
                            <div className="cell">ADD.</div>
                            <div className="cell">Contact detail</div>
                        </div>
                        {row}{row}{row}{row}{row}{row}{row}{row}{row}{row}{row}{row}{row}
                </div>
            </div>
        </div>
    )
}

export default Component
