
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    
    const [data , setData]=useState([])
    useEffect(()=>{
    fetch('https://api.github.com/users/grwt')
    .then(response => response.json())
    .then(data=>{
        setData(data)
    })

   },[])

  return (
    <div className='text-center m-4 bg-slate-500 text-white'>
      Github Following : {data.follower}
</div>
  );
}

export default Github;

