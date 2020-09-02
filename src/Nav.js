import React from 'react'
import './nav.css'
import LockIcon from '@material-ui/icons/Lock';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from 'react-router-dom'

function Nav() {
    return (
            <>
            <div className="navbar">
                            <div className="logo">LOGO</div>
                            <div className="icons-1">
                                <Link to="/hello" target="blank">
                                <NotificationsIcon className="notificationIcon"/>
                                </Link>
                                <Link to="/hello" target="blank">
                                <AddIcon className="addIcon"/>
                                </Link>
                                <Link style={{color:'black'}} to="/todo " target="blank">
                                <LockIcon className="LockIcon"/>
                                </Link>
                            </div>
                            <div className="icons">
                                <div>NAME</div>
                                <div>LOGOUT</div>
                                <Link to="/AdminProfile" target="blank">
                                <AccountCircleIcon className="accountIcon"/>
                                </Link>                                 
                            </div>
             </div>
            </>       
    )}

export default Nav