import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [password,setPassword]=useState("");
  const [charAllowed , setCharAllowed]= useState(false);
  const [numberAllowed,setNumAllowed]= useState(false);
  
   const passwordGenerator = useCallback(()=>{
    let pass="";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str+="123456789";
    if(charAllowed) str+="~!@#$%^&*()_+-{}[]<>,./";

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() *str.length + 1)
      pass+=str.charAt(char)

    }
    setPassword(pass);


  },[length,numberAllowed,charAllowed,setPassword])

  const passRef=useRef(null);
  const copyToClickboard = useCallback(()=>{
    passRef.current?.select()
    
    window.navigator.clipboard.writeText(password);

  },[password]) 
  
  useEffect(()=>{
    passwordGenerator();
  },[length,charAllowed,numberAllowed,setPassword])



  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value={password}
        placeholder='Password'
        className='outlin-none w-full py-1 px-3'
        readOnly
        ref={passRef}
        />
        <button onClick={copyToClickboard} className='bg-blue-700 outline-none text-white px-4 py-0.5 '>Copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center'>
        <input 
        type="range"
        min={0}
        max={100}
        className='cursor-pointer '
        value={length}
        onChange={(e)=>{
          setLength(e.target.value);
        }} 
        />
        <label className='px-1 my-1'>Length:({length}) </label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked = {false}
        className='cursor-pointer '
        value={length}
        id="numberInput"
        onChange={(e)=>{
          setNumAllowed((prev)=>!prev);
        }} 
        />
        <label className='px-1 my-1'>Number</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={false}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
    </div>
  )
}

export default App
