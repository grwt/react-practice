
import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-center my-10 font-semibold text-5xl '>
      User : {userid}
    </div>
  )
}
export default User

