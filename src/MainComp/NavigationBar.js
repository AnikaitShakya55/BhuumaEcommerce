import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import  styles from './NavigationBar.module.css';

const NavigationBar = () => {


  return (
    <div className={styles.navContainer}>

        <nav>
            <ul style={{listStyle:'none', display:"flex" , gap:'20px'}}>
                <li><NavLink to='/home' > HomePage </NavLink></li>
                <li><NavLink to='/contact' > Contactpage </NavLink></li>
                <li><NavLink to='/product' > productpage </NavLink></li>
            </ul>
        </nav>
      
    </div>
  )
}

export default NavigationBar
