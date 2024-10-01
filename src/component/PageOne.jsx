import React, { useState } from 'react'

const PageOne = (props) => {
  const [count,setcount]=useState('')
  return (
    <center>
      <h1>TODO list</h1>
      <input type='text' placeholder='serach' onChange={(e)=>setcount(e.target.value)} value={count} style={{margin:'5px'}} ></input>
      <button type="button"
      class="btn btn-primary"
      onClick={()=>{
        props.addlistitem(count)
        setcount('')
      }}
      >+</button>
    </center>
  )
}

export default PageOne