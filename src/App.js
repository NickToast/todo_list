import './App.css';
import React, {useState} from 'react';
import DisplayTasks from './components/DisplayTasks';
import AddTask from './components/AddTask';

function App() {

  //create a useState in our App that contains a list of all our tasks
  const [tasks, setTasks] = useState([]);

  //arrow function that takes in information to add/create more tasks that are placed into our list above
  const newTask = (task) => {
    setTasks((currentData) => ([...currentData, task]));
  }

  //arrow function that takes in the id from DisplayTasks.jsx
  //use a temp variable to hold a list of all our tasks
  //we then change the task completed value (boolean) and setTask to the temp and it will set the task with all the same values except a switched completed value
  const completedTask = (id) => {
    let temp = [...tasks];
    temp[id].completed = !temp[id].completed;
    setTasks(temp);
  }

  //same logic as above, but using task's visible key, and its boolean value to switch back and forth
  const removeTask = (id) => {
    let temp = [...tasks];
    temp[id].visible = !temp[id].visible;
    setTasks(temp);
  }


  return (
    <>
      <AddTask newTask={newTask}/>
      { //iterating through task map 
        tasks.map((task, i)=> {
          return(
            <DisplayTasks task={task.task} completed={task.completed} visible={task.visible} index={i} deleteTask={removeTask} completeTask={completedTask}/>
          ) //putting functionality into components by passing them over as props
        })
      }
    
    
    </>
  );
}

export default App;
