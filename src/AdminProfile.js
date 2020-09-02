import React from 'react'
import SideBar from './SideBar'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SaveIcon from '@material-ui/icons/Save';
import './admin.css'
import { Button } from '@material-ui/core';
function AdminProfile() {
    return (
        <div className="main-admin">
            <SideBar style={{marginRight:'10px'}}></SideBar>
            <div className="admin">
                <h3 className="heading">SUPER ADMIN PROFILE (View & Edit access)</h3>
                <div className="detail">
                    <div className="detail-1">
                        <div className="combo">
                            <AccountCircleIcon style={{marginRight:'10px',marginBottom:'25px'}}/>
                            <h4 style={{color: 'rgb(22, 141, 150)'}}>Name :</h4>
                        </div>
                        <h4>User ID :</h4>
                        <h4>User Password :</h4>
                        <h4>Email :</h4>
                        <h4>ID Proof:</h4>
                        <h4>Phone No. :</h4>
                        <h4>Address 1 :</h4>
                        <h4>Address 2 :</h4>
                    </div>
                    <div className="detail-2">
                        <h4>City/State :</h4>       
                        <h4>Country :</h4>
                        <h4>D.O.B :</h4>
                        <h4>Year of Joining :</h4>
                    </div>
                </div>
                    <div className="btn">
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        startIcon={<SaveIcon />}>
                        Save
                    </Button>
                    <Button variant="contained" color="secondary">
                       RESET
                    </Button>
                    <Button variant="contained" color="secondary">
                      APPLY CHANGE
                    </Button>
                    </div>
            </div>
            
        </div>
    )
}

export default AdminProfile
