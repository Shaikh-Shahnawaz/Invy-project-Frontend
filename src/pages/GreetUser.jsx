import React, { useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom';


const GreetUser = () => {

    const [tokenData,setTokenData] = useState({})

    // ==============useEffect============== 
    useEffect(() => {
     // decoding the token to the real data   
    const decoded = jwt_decode(localStorage.getItem('token'));
    setTokenData({...decoded})
  
    }, [])


  return (
    <div className='container bg-light'>

<button className='btn btn-dark'> <Link style={{'textDecoration':'none'}} class="text-light" to="/">Home</Link></button>
        <h3>Welcome Back !! {tokenData.name}</h3>

    </div>
  )
}

export default GreetUser