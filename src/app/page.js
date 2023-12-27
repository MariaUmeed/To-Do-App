"use client"

import  React, { useState } from "react"


export default function Home() {
  const [title,settitle] = useState("")
  const [disc,setdisc] = useState("")
  const [mainTask,setmainTask] = useState([])
 
  const deleteHandler=(i)=>{
    let copytask=[...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)

  }
  const submitHandler = (e)=>{
   e.preventDefault()
   setmainTask([...mainTask,{title,disc}])
   settitle("")
   setdisc("")
  
  }
  let rendertask= <h2 className="font-semibold">No Task Avaliable</h2>
 if (mainTask.length > 0) {
  rendertask = mainTask.map((t, i) => (

    <li className="flex justify-between items-center">
        <div key={i} className="flex justify-between mb-5 w-2/3">
      <h5 className="text-2xl font-semibold">{t.title}</h5>
      <h6 className="text-xl font-semibold">{t.disc}</h6>
    </div>
    <button onClick={()=>{deleteHandler(i)}} className="bg-red-400 font-semibold text-white rounded py-2 px-4 mb-6">Delete</button>
    </li>
 
  ))};
  
  return (
    <main>
      <h1 className="bg-black text-white p-5 text-center text-5xl">My TO DO List</h1>
      <form onSubmit={submitHandler}>
        <input className="text-2xl border-zinc-800 border-4 m-8 p-5 py-3" 
        placeholder="Enter Task  Here"
        value={title}
        onChange={(e)=>{settitle(e.target.value)}}
        />
         <input className="text-2xl border-zinc-800 border-4 m-8 p-5 py-3" 
        placeholder="Enter Discription Here"
        value={disc}
        onChange={(e)=>{setdisc(e.target.value)}}
        />
        <button className="border-4 bg-black rounded text-white font-blod text-2xl  p-3">

         ADD TASK
        </button>
        
       
      </form>
      <hr/>
      <div className="bg-slate-200 font-blod text-2xl p-8">
        
        <ul>{rendertask}</ul>
      </div>
    </main>
  )
}
