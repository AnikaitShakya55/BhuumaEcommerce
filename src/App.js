import React from 'react';
import { useState } from 'react';

const App = () => {
  
  const [loggedIn,setLoggedIn] = useState(false)
   
  const clickHandler =()=>{
    setLoggedIn(!loggedIn)

  }
  
  return (
    <div>

      <button onClick={clickHandler}>Login</button>
      
    </div>
  )
}

export default App
