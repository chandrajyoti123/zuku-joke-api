import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Dashboard.css'
import user from './user.png'
import JokeCard from '../../components/JokeCard/JokeCard'

export default function Dashboard() {
    const [data,setData]=useState({})
    const [token,setToken]=useState('')

    const loadTokenFromLcSt=()=>{
      const response=JSON.parse(localStorage.getItem("loginuserauth"))
      setToken(response?.token)
      console.log(response?.token)
    }
    useEffect(()=>{
      if(!(JSON.parse(localStorage.getItem("loginuserauth")))){
          window.location.href='/login'
      }
     loadTokenFromLcSt();
    },[])

    const loadproduct=async()=>{
   try{
    const response=await axios.get(`https://instagram-express-app.vercel.app/api/auth/zuku`,{headers:{Authorization:`Bearer ${token}`}})
    setData(response?.data?.data)
    console.log(response?.data?.data) 
   }catch(err){
    console.log(err)
   }

    }
    useEffect(()=>{
     loadproduct()
    },[token])
    
    const logOutFunc=async()=>{
     try{
      const response=await axios.delete(`https://instagram-express-app.vercel.app/api/auth/logout
      `,{headers:{Authorization:`Bearer ${token}`}})
     
      if(response?.data?.success){
            alert(response?.data?.message)
            window.location.href='/login'
        }else{
            alert(response?.data?.message)
        }
     }catch(err){
      console.log(err)
     }

    }
    
   

  return (
    <div className='dashboard-container'>
      <div className='sidebar'>
        <img src={user}  className='user-img'/>
        <div className='user-class'>{data?.user?.name}</div>
        <button className='btn margin-bottom' type='button' onClick={logOutFunc}>Log out</button>

      </div>
      <div className='message-container'>
        <h1 className='heading margin-top'> Dynamics Jokes</h1>
        <p className='para'>refresh a page to read new jokes</p>
        <JokeCard joke={data.message}/>
      </div>
   
   
      
    </div>
  )
}
