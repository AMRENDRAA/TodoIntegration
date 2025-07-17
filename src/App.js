import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_BASE = 'http://localhost:3001/todos';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [task, setTask] = useState('');

//   // Fetch todos on mount
//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = async () => {
//     const res = await axios.get(API_BASE);
//     setTodos(res.data);
//   };

//   const createTodo = async () => {
//     if (!task.trim()) return;
//     await axios.post(`${API_BASE}/create`, { task });
//     setTask('');
//     fetchTodos(); // Refresh list
//   };

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h1>📝 Todo App</h1>

//       <input
//         type="text"
//         placeholder="Add new task"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       />
//       <button onClick={createTodo}>Add</button>

//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>{todo.task}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import './App.css'
export function App(props){
console.log(useState("Hello "));

const [count,setcount]=useState(0);
console.log(count);
console.log(setcount);

const handleClick=()=>{

  if(count<=0)
  {
    setcount(count==0);
  }else 
setcount(count+1);
}

const handleClickDec=()=>{
  if(count<=0)
  {
    setcount(count==0);
  }else 
  setcount(count-1);

}
return (
  <div>
<h1>{count}</h1>
<button onClick={handleClick}>+</button>

<button onClick={handleClickDec}>-</button>
</div>
)
}

export default App;
  // let a=5;
  // let b="Text";
  // return (

  //   <div className='App'>
  //     <h1 className='Main'> Hello  React Component </h1>
  //     <p>This is tutorial of React JS  </p>
      
  //     <h2> A value is {a+2}</h2>
  //     {b}
  //   </div>

//)