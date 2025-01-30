import React, { useState } from 'react'
import Todo from './Todo'

export default function TodoList() {
  const [task, setTask] = useState(["just go on","with great good","happy enough"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value)
  }

  function addTask() {

    if (newTask.trim() !== "") {
      setTask(t => [...task,  newTask])
      setNewTask("");
    }

  }


  function deleteTask(index) {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
      setTask(updatedTask);
    }
  }

  function moveTaskDown(index) {
    if (index < task.length - 1) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
      setTask(updatedTask);
    }
  }

  return(
    <div className="to-do-list">
      <h1>ToDo</h1>

      <div>
        <input type="text" placeholder='Enter task...' value={newTask} onChange={handleInputChange} />

        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {task.map((task, index) => 
          <li className="li" key={index}>
            <span className="text">{task}</span>

            <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>

            <button id='up' className="move-btn" onClick={() => moveTaskUp(index)}><img src='https://img.icons8.com/?size=100&id=VJcAuwpmguVH&format=png&color=000000' height={24} width={24}></img></button>
            <button id='dw' className="move-btn" onClick={() => moveTaskDown(index)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.886 5.536A1.002 1.002 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13a.998.998 0 0 0 1.644 0l9-13a.998.998 0 0 0 .064-1.033zM12 17.243 4.908 7h14.184L12 17.243z"/></svg></button>
          </li> 
        )}
      </ol>

    </div>
  )
}

