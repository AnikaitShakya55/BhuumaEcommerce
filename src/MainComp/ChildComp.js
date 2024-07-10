import React, { useState } from 'react'

const ChildComp = ({changeName}) => {

    const [editName,setEditName] = useState('')

    const editHandler=(e)=>{
        setEditName(e.target.value);
        changeName(editName)
    }



  return (
    <div>

        <input type='text' value={editName} 
        onChange={editHandler} />
        <button>ChangeName</button>
      
    </div>
  )
}

export default ChildComp
