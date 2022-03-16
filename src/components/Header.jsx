import React,{useState} from 'react'
import styles from '../css/header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Register from '../pages/Register';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Header = () => {



  const [modalShow, setModalShow] = useState(false);

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
    {/* <FontAwesomeIcon  icon={faCoffee} /> */}
    <p onClick={()=>setModalShow(true)} style={{cursor:'pointer'}}>Register</p>
    <p style={{cursor:'pointer'}} className='ms-3'>Login</p>
    </div>

<Register show={modalShow} onHide={()=>setModalShow(false)} />

    </div>
    
    </>
  )
}

export default Header