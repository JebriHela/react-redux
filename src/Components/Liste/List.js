import React from 'react'
//import {ListGroup} from 'react-bootstrap'
//import Edit from '../Edit/Edit'
import Task from './Task'
import {useSelector} from 'react-redux'

function List() {
    const todos = useSelector(state => state.todos)

  return (
    <div>
   {todos.map(el => <Task task= {el}/> )}
    </div>
  )
}

export default List