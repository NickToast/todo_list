import React, {useState} from 'react';

const DisplayTasks = (props) => {
    
    //
    const {task, completed, visible, index, deleteTask, completeTask} = props

    const deletedStyle = {
        textDecoration: "line-through",
        marginLeft: "20px",
    }

    const normalStyle = {
        display: "flex",
        marginLeft: "20px",
        gap: "20px",
    }

    return (
        <>
        {visible? //if visible is set to true, then do the following
        //if completed is set to true, then apply deletedStyle, if not, apply normalStyle
        <div style={completed? deletedStyle:normalStyle}>
            <label>{task}</label>
            {
                completed?
                <input type="checkbox" name="id" value={index} onChange={()=> completeTask(index)} checked />
                :<input type="checkbox" name="id" value={index} onChange={()=> completeTask(index)}/>
            }
            {completed?<button onClick={() => deleteTask(index)}>Delete</button>:<></>}
        </div>
        : <></> //if visible is false, outputs a blank page
        }
        
        </>
    )
}

export default DisplayTasks