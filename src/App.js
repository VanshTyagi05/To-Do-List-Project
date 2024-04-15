import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [todolist,setTodolist]=useState([])

  let saveToDoList=(event)=>{
    event.preventDefault();
  
  let toname=event.target.toname.value;
  if(!todolist.includes(toname)){
    let finaltodolist=[...todolist,toname]
    setTodolist(finaltodolist)
      
  }
  else{
    alert(`already in list`)
  }
  }
  let list=todolist.map((value,index)=>{
    return(
      <ToDoListItems value={value} key={index} indexNumber={index} todolist={todolist}
      setTodolist={setTodolist}
      />
    )
  })
  return (
    <div className="App">
      <h1 className='heading'>To Do List</h1>
      <form onSubmit={saveToDoList}>

      <input type='text' placeholder='enter-task' name='toname'></input><button>Save</button>      

</form>

<div className='outerdiv'>
  <ul>
    {list}
  </ul>
</div>

    </div>
  );
}

export default App;

function ToDoListItems({value,indexNumber,todolist,setTodolist}){
  let [status,setstatus]=useState(false)
  let deleteRow=()=>{
    let finalData=todolist.filter((v,i)=>i!=indexNumber

    )
    setTodolist(finalData)
  }
  let checkStatus=()=>{
    setstatus(!status)

  }
  return(
    <li  className={(status?'completetodo':'')}  onClick={checkStatus}>{indexNumber+1} {value} <span onClick={deleteRow}>&times;</span></li>
  )
}