import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteTask,CompleteTask} from '../../JS/Action/action'
import Edit from '../Edit/Edit'
function Task({task}) {
    const dispatch = useDispatch()

    const delet = ()=>{

        
        dispatch(deleteTask({ id:task.id}))
    
    }
   
  return (
    <div 
    style={{
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-around",
      width: "50%",
      margin:"5%",
      marginLeft:"25%"
  }}>
        <p style={{ margin: "0px", textDecoration: task.isDone ? "line-through" : "" }}>{task.description}</p>
        <button onClick={delet}>delet</button>
        <Edit item={task}/>

        <button  onClick={() => dispatch(CompleteTask(task.id))}>  {task.isDone ? "unDone" : "Done"}</button>
        

    </div>
  )
}

export default Task