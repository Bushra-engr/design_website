import React, { useState } from 'react'
import Counter from './counter'

const App = () => {
  
  
  const [name,setUser] = useState("");
  
  const submitHandler = (e) =>{
    e.preventDefault();
      setUser("")
  }
  return (
    <div className='h-screen w-full items-center justify-center flex'>

      <form action="/" className='flex flex-col gap-10 items-center' onSubmit={submitHandler}>

        <input type="text" className="h-21 w-80 border-3 border-amber-700 bg-orange-100 text-black text-center text-2xl" name="name"  id="name" placeholder='Enter your name' value={name} onChange={(e)=>setUser(e.target.value)}/>

        <button className="px-14 py-4 bg-amber-300 w-1/2 text-center rounded-2xl ">Submit</button>       

      </form>

      </div>
  )
}

export default App