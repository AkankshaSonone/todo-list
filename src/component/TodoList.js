import React, { useState } from 'react'
import Todoform from './Todoform'
import Todo from './Todo'

export default function TodoList() {
    const [todos , setTodos] = useState([]);
    
    const addTask = task => {
        if(!task.text){
            return
        }
        const newTodos = [task , ...todos];
        setTodos(newTodos);
        console.log(newTodos)
    }
    const completeTask = id => {
        let updatedTasks = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = true;
            }
            return todo;
        })
        setTodos(updatedTasks)
    }

    const removeTask = id => {
        let updatedTasks = [...todos].filter(task => task.id !== id)
        setTodos(updatedTasks)
    }
  return (
    <div>
      <Todoform addTask={addTask}></Todoform>
      <Todo todos={todos} completeTask={completeTask} removeTask={removeTask}></Todo>
    </div>
  )
}
