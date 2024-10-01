import React from 'react'

const PageTwo = (props) => {
  return (
    <center>
        <li style={{border:'1px solid black', width:'200px', margin:'5px' }}> {props.item}
            <span>
            <i class="fa-solid fa-trash-can"
            style={{margin:'10px'}}
            onClick={()=>{
                props.deleteitems(props.index)
            }}
            ></i>
            </span>
        </li>
    </center>
  )
}

export default PageTwo 