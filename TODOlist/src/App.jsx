
import React, { useState } from "react"
function App() {
  const [title,setTitle] = useState("")
  const [desc, setDesc]=useState("")
  const[mainTask,SetMainTask]=useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim() !== "" && desc.trim() !== "") {
      setTitle(" ");
      setDesc("");
      SetMainTask([...mainTask, { title, desc }]);
    } else {
      alert("Please enter a title and description for the task.");
    }
  };
  const deleteHandler=(i)=>{
    let copyTask=[...mainTask]
    copyTask.splice(i,1)
    SetMainTask(copyTask)
  }
  let renderTask = <h1>No task available</h1>;
  if (mainTask.length > 0) {
    let counter = 1;
  
    renderTask = mainTask.map((t, i) => {
      
      return (
        <li key={i} className="flex items-center justify-between mb-9">
          <div className="flex items-center justify-between w-2/3">
            <h4 className="text-2xl font-bold">{counter++}. {t.title}</h4>
            <h6 className=" text-black text-2xl w-1/3">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-600 text-white text-lg rounded-md px-3 py-1"
          >
            Delete
          </button>
        </li>
      );
     
    });
  }

  return (
    <div className= "h-screen"> 
      <h1 className= "w-full  py-6 bg-slate-500 text-white text-center font-bold text-5xl">Himanshu TODO-list</h1>
      <form onSubmit={submitHandler} className="my-4 text-center space-x-16">
        <input value={title} 
        onChange={(e)=>{
          setTitle(e.target.value)
          

        }} type="text" className="rounded-lg text-2xl border-zinc-900 border-4 my-1 mx-2 py-1.5" placeholder="  Your task..." />
        <input value={desc} 
        onChange={(e)=>{
          setDesc(e.target.value)
        }} type="text" className="rounded-lg text-2xl border-zinc-900 border-4 my-1 mx-2 py-1.5" placeholder="Task description..." />
        <button  className="bg-black text-2xl py-1.5 px-6 mx-12 font-bold rounded text-white">Add Task</button>
      </form>
      <hr />
      <div className=" p-8 text-black my-5">
        <ul>
         {renderTask}
        </ul>
      </div>
    </div>
    
  )
}

export default App
