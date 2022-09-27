import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';
import Summaiya from "./component/sumaiya"

function App() {
  let [txt,settxt] = useState("abc");
let [list,setList] = useState([]);
// let txt = ""
// let list = [];


  function add(){
    list.push(txt)
    console.log(list);
    setList([...list])
  }

  function deleteAll(){
   list = "";
   setList([...list])
  }
  function edit(i){
    let editt= prompt("Edit task",{txt});
    list[i] = editt;
    settxt(editt)
   }

   
  function delet(i){
    const nwlist = [...list];
    nwlist.splice (i,1);
    setList([...nwlist])
   }
  return (
    <div className="App">
      <header className="App-header">
      <Summaiya merivalue="T o D o"/>

        {/* 
        <p>hello world</p>
        <p>the square of {c} is {c*c}</p> */}
        <input className='inp' onChange={(e)=> {
          settxt(e.target.value);
          console.log(txt);
        }}/>     
        <button className='btn ' onClick={add}>ADD</button>   
        <button className='btn ' onClick={deleteAll}>Delete All</button>   
       
        <ul className='listt'>
          {list.map((e,i)=> {
            return <li key={i}>{e}
            <button className='btn' onClick={()=>delet(i)}>Delete</button>   
            <button className='btn' onClick={()=>edit(i)}>edit</button>  
          </li>
            }  
           
          )
          }
        </ul>
        {/* <ul className='listt'>
          {list.map((e,i)=> {
            return <li key={i}>{e}</li>
          })} */}
        {/* <p>
          {list.map((e,i)=> {
            return  {e};
          })}
        </p> */}
      </header>
    </div>
  );
}

export default App;
