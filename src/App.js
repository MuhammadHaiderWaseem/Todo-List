import logo from './logo.svg';
import './App.css';
import PageOne from './component/PageOne';
import { useState } from 'react';
import PageTwo from './component/PageTwo';

function App() {
  const [todolist,setTodolist]=useState([])
  const addlistitem=(count)=>{
    console.log('===',count)
    if (count!=="")
    setTodolist([...todolist,count])
  }
    const deleteitems=(key)=>{
      let aabbcc =[...todolist];
      aabbcc.splice(key - 1)
     setTodolist ([...aabbcc])
    }
  return (
    <div>
      <PageOne addlistitem={addlistitem} />
      {todolist?.map((item,index)=>{
        return(
          <>
          <PageTwo item={item} index={index} key={index} deleteitems={deleteitems} />
          </>
        )
      })}
    </div>
  );
}

export default App;
