import React from 'react'
import { useState } from 'react'

export default function App() {

   const [title, settitle] = useState("")
   const [disc, setdisc] = useState("")
const [maint, setmaint] = useState([])

   const submit = (e)=>{
e.preventDefault()

setmaint([...maint,{title,disc}])

settitle("")

setdisc("")

   }
   const deleteHandeler =(i)=>{
let copyTask = [...maint]
copyTask.splice(i,1)
setmaint(copyTask)
   }

   let renderTask = <h2>no tast available</h2>

 if (maint.length >0) {
   renderTask = maint.map((t,i)=>{
      return <div className='flex justify-between p-4'>
         <h4>{t.title}</h4>
      <h5>{t.disc}</h5>

      <button className='bg-red-600 rounded-xl text-white p-1'
      onClick={()=>{
         deleteHandeler(i)
      }}
      >Delete</button>
      </div>
         })
 }

  return (
    <>
    
    <h1 className='bg-green-300 text-center text-5xl capitalize p-6'>my Todo list</h1>

    <form className='text-center mt-8'onSubmit={submit}>
      <input type="text" placeholder='Enter the title' 
      className='border-black border-2 p-2 rounded-md w-[20vw]'
      value={title}
      onChange={(e)=>{
settitle(e.target.value)
      }}
      />
<br /><br />
<input type="text" placeholder='Enter the disc' 
      className='border-black border-2 p-2 rounded-md w-[20vw]'
      value={disc}
      onChange={(e)=>{
         setdisc(e.target.value)
               }}
      />
      <br />

      <button className='bg-black rounded-xl mt-7 p-3 text-white'>Add tasks</button>
    </form>
    <hr />

    <div className="p-9 bg-zinc-600 text-yellow-600 text-2xl font-bold w-[70%] ml-[17vw] mt-9">
<ul>
   {renderTask}
</ul>
    </div>
    
    </>
  )
}
