import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import SideBar from './SideBar'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './todo.css'
function Todo() {
    return (
        <>
        <div className="main-todo">
            <SideBar></SideBar>
            <div className="combine">
            <div className="todo-box">
                <div className ="todo">
                    <h2>To do Task</h2>
                </div>
                <div className="inprogress">
                    <h2>In Progress</h2>
                </div>
                <div className="completed">
                    <h2>Completed</h2>
                </div>
            </div>
            <div className="btn">
                    <Icon/>
                    <Button variant="contained" color="primary">
                      <AddCircleIcon/> ADD TASK
                    </Button>
                    <Button variant="contained" color="secondary">
                      <EditIcon/> EDIT TASK
                    </Button>
                    <Button variant="contained"
                    color="primary"
                    startIcon={<DeleteIcon />}>
                    Delete
                    </Button>
                     <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        startIcon={<SaveIcon />}>
                        Save
                    </Button>
             </div> 
            </div>
        </div>
        
        </>
    )
}

export default Todo
