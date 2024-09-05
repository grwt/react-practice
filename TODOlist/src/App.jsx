
import React, { useState } from "react"
function App() {
  const [title,setTitle] = useState("")
  const [desc, setDesc]=useState("")
  const[mainTask,SetMainTask]=useState([])
  const submitHandler=(e)=>{
    e.preventDefault()
    setTitle(" ")
    setDesc("")
    SetMainTask([...mainTask,{title,desc}])
    console.log(mainTask)
    
    

  }
  let renderTask = <h1>No task available</h1>
  if(mainTask.length>0){
    renderTask=mainTask.map((t,i)=>{
        return (
          <li>
            <div className="flex justify-between mb-5">
              <h4 className="text-2xl font-bold">{t.title}</h4>
              <h6 className="text-1xl">{t.desc}</h6>
  
            </div>
          </li>
        )

      

    })

  }

  return (
    <div > 
      <h1 className= "m-3 py-3 bg-black text-white text-center font-bold text-5xl">Himanshu TODOlist</h1>
      <form onSubmit={submitHandler} className="text-center space-x-16">
        <input value={title} 
        onChange={(e)=>{
          setTitle(e.target.value)
          

        }} type="text" className="rounded-lg text-2xl border-zinc-900 border-4 my-1 mx-2 py-1.5" placeholder="Task Title" />
        <input value={desc} 
        onChange={(e)=>{
          setDesc(e.target.value)
        }} type="text" className="rounded-lg text-2xl border-zinc-900 border-4 my-1 mx-2 py-1.5" placeholder="Task description..." />
        <button  className="bg-black text-2xl py-1.5 px-6 mx-12 font-bold rounded text-white">Add Task</button>
      </form>
      <hr />
      <div className="bg-gray-500 p-8 text-white my-5">
        <ul>
         {renderTask}
        </ul>
      </div>
    </div>
    
  )
}

export default App
