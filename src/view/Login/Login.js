import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const postApiOfUserLogin=async()=>{
       if(!email){
            alert("please enter your email")
            return
        }
        if(!password){
            alert("please enter your password")
            return
        }
        if(!email){
            alert("please enter your email")
            return
        }
       
       try{
        const response = await axios.post(`https://instagram-express-app.vercel.app/api/auth/login`, {
           email:email,
            password:password,
            })
            console.log(response)
        if(response?.data?.success){
            localStorage.setItem('loginuserauth', JSON.stringify(response?.data?.data))
                alert(response?.data?.message)
                window.location.href='/'
            }else{
                alert("invalid credential")
            }
        }catch(err){
        console.log(err)
        }
      }
  return (
    <div className='signup-container'>
            <div className='signup-subcontainer'>
                <h1 className='heading'>log in to your account</h1>
                
                <div className='input-group'>
                    <label className='input-label' htmlFor='email'>Email</label>
                    <input type='email' placeholder='enter you email' id='email' className='input-field'
                    value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }}  />
                </div>
                <div className='input-group'>
                    <label className='input-label' htmlFor='password'>Password</label>
                    <input type='password' placeholder='password' id='password' className='input-field'
                    value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }}  />
                </div>
                <Link to={'/signup'} className='hyperlink-text'><div className='text'>Don't Have Any Account</div></Link> 
                <button className='btn' type='button'onClick={postApiOfUserLogin} >Login</button>

            </div>

        </div>
  )
}
