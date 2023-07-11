import React, {useState} from 'react';

const AddTask = (props) => {

    const {newTask} = props

    const [task, setTask] = useState({
        task: "",
        completed: false,
        visible: true
    })



    const handleChange = (e) => {
        const {name, value} = e.target; //destructuring name and value from e.target from the form below
        setTask((currentData) => ({...currentData, [name]:value})); 
        //spread currentData (this case, task), and then selects the key we want to change which is identified by name
    }

    const submitForm = (e) => {
        e.preventDefault(); //prevents the default refresh when submitting a form
        newTask(task); //references line 5, which connects to my newTask function in App.js
        setTask({
            task: "",
            completed: false,
            visible: true
        }) //this resets fields after pressing the "add" button
    }

    const formStyle = {
        marginLeft: "20px",
        marginTop: "20px"
    }

    const textStyle = {
        borderRadius: "5px",
        margin: "10px",
        padding: "5px"
    }

    const btnStyle = {
        backgroundColor: "rgb(0,25,248)",
        color: "white",
        borderRadius: "5px",
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "10px",
        paddingRight: "10px",
    }

    return (
        <>
            <form onSubmit={submitForm} style={formStyle}>
                <label>To Do: </label>
                <input type="text" name="task" onChange={handleChange} value={task.task} style={textStyle}/>
                <button style={btnStyle}>Add</button>
            </form>
        </>
    )
}

export default AddTask