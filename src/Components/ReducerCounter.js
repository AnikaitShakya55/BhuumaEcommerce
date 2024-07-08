import React, { useReducer } from 'react';

const initialCountState ={countVal:0};

const countReducer=(state,action)=>{
  if(action.type ==='ADD'){

    return {countVal: state.countVal +1}
  }
  else{
    return state
  }

  
}


const ReducerCounter = () => {
  const [stateValue , dispatchCount] = useReducer(countReducer,initialCountState)
  
  const addHandler=()=>{
    dispatchCount({type:'ADD'})
  }

  return (
    <div>
         <h1>{stateValue.countVal}</h1>
         <button onClick={()=> addHandler()}>ADD</button>

      
    </div>
  )
}

export default ReducerCounter
