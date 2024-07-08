import React, { useEffect, useState } from 'react'

const CleanFunction = () => {
    const [email , setEmail] = useState();

    useEffect(()=>{
        const Timer = setTimeout(()=>{
            console.log("email")
        },1000)
        
        return ()=> {
            clearTimeout(Timer);
            console.log("Cleanup working")
        }

    },[email])


  return (
    <div>
       <input type='email' onChange={(e)=>{setEmail(e.target.value)}}   />
    </div>
  )
}

export default CleanFunction
