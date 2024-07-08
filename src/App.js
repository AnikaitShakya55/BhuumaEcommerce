import React from 'react'
import ReducerCounter from './Components/ReducerCounter';
import {useSelector,useDispatch} from 'react-redux';
import { addCount } from './store/store';


const App = () => {
  const dispatch = useDispatch()
  const countValue = useSelector((state)=> state.counter.countVal)
  
  const addBy1 =()=>{
    dispatch(addCount())
  }

  return (
    <div>
      <h1>{countValue}</h1>

      <button onClick={addBy1}>ADDBY1</button>      
    </div>
  )
}

export default App
