import React, { Fragment, useState } from "react"
import Header from './Layout/Header'
import './App.css'
import 'react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Cart from "./Components/Cart/Cart"
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min"

import MenuPage from "./Pages/MenuPage"
import Footer from "./Layout/Footer/Footer"

import HomePage from "./Pages/HomePage/HomePage"

const App = () => {

  const[cartShow,setCartShow]=useState(false); 

  const cartShowHandler=()=>{
    setCartShow(true)
  }
  const cartCloseHandler=()=>{
    setCartShow(false)
  }

  return (
    <Fragment>
      
       <Header cartShowHandler={cartShowHandler}/>

           <main>
           { cartShow  && <Cart cartCloseHandler={cartCloseHandler}/>}

          <Route path='/' > <Redirect to='/home'/> </Route>
          <Route path='/home' exact> <HomePage/> </Route>
          <Route path='/menu' exact> <MenuPage/> </Route>

           </main>


           <Footer/>
           
    </Fragment>
  )
}

export default App;


