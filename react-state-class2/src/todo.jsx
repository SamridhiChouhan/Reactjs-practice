import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Todo (){
    let [todos,setTodo] = useState([{ value:"sample task" , key: uuidv4() , isDone:false}]);
    let [newTodo,setnewTodo] = useState("");

    let addNewTask = ()=>{
        setTodo((prevTodos)=>{
            return [...prevTodos, {value : newTodo , key: uuidv4() , isDone:false}];
        });
        setnewTodo("");
    }
    
    let updateTodo=(event)=>{
        setnewTodo(event.target.value);
    }

    let deleteTodo=(id)=>{
        setTodo((prevTodos) => todos.filter((prevTodos)=> prevTodos.key != id));
    }

    // let uppercaseAll=()=>{
    //     setTodo((prevTodos)=> prevTodos.map((todo)=>{
    //         return{
    //             ...todo,
    //             value : todo.value.toUpperCase()
    //         }   
    //     }))
    // }

    let markDoneAll=()=>{
       setTodo((prevTodos)=> prevTodos.map((todo)=>{
          return {
            ...todo,
            isDone : true
          }
        }))
    }
    
    let markDone=(id)=>{
        setTodo((prevTodos)=> prevTodos.map((todo)=>{
            if(todo.key === id){
            return{
                ...todo,
                isDone : true
            }} else {
                return todo;
            } 
        }))
    }

    // let uppercaseOne=(id)=>{
    //     setTodo((prevTodos)=> prevTodos.map((todo)=>{
    //         if(todo.key === id){
    //         return{
    //             ...todo,
    //             value : todo.value.toUpperCase()
    //         }} else {
    //             return todo;
    //         } 
    //     }))
    // }

    return(
        <>
        <h2>To-do App</h2>
        <input style={{height:"1.5rem"}} value={newTodo} className="input" placeholder="Add a task"  onChange={updateTodo}/>&nbsp; &nbsp; &nbsp;
        <button onClick={addNewTask}>Add</button>
        <br /><br /><br /><br /><br />
        <hr />

        <h4>Tasks to do</h4>
        <ul>
            {
               todos.map((todo) => (
                <li key={todo.key}>
                    <span  style={{display:"flex", alignItems:"center" , justifyContent:"center" , height:"2rem" , marginBottom:"1rem"}}>
                        <span style={{textDecoration: todo.isDone==true? "line-through":"none"}}>{todo.value}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>deleteTodo(todo.key)} style={{height: "2rem" , fontSize:"0.8rem"}} >Delete</button>&nbsp;

                        <button onClick={()=>markDone(todo.key)} style={{height: "2rem" , fontSize:"0.8rem" , backgroundColor: "grey", }} >Mark as done</button>&nbsp;
                        
                        {/* <button onClick={()=>uppercaseOne(todo.key)} style={{height: "2rem" , fontSize:"0.8rem"}} >Uppercase one</button> */}
                    </span>
                </li>
               )) 
            }
        </ul>
        <br /><br />
        {/* <button onClick={uppercaseAll}>Uppercase all</button> */}
        <button onClick={markDoneAll}>100% Completed</button>
        </>
    )
}

export default Todo

