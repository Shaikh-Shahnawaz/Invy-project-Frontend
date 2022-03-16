import React from 'react'
import styles from '../css/header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <>

    <div className={` ${styles.header} container-fluid `}>

    <div className={`d-flex align-items-center ${styles.skinnsi}`}>
    <img src="https://assets.toothsi.in/logo_ba7eedb67a.svg?q=75&w=384" alt="" />
    <p>Laser hair removal</p>
    <p>dermafacial</p>
    </div>

    <div className={`d-flex align-items-center ${styles.toothsi}`}>
        <p>explore</p> <img  src="https://assets.toothsi.in/Toothsi_Logo_a27f57d5ba.png?q=75&w=256" alt="" />
    </div>


    |
    <div className={` d-flex ${styles.register}`}>
    <FontAwesomeIcon  icon={faCoffee} /><p>Register</p>
    </div>


    </div>
    
    </>
  )
}

export default Header