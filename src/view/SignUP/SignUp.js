import React, { useState } from 'react'
import './SignUp.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpass, setConfirmpass] = useState('')
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const postApiOfUser=async()=>{
        if(!name){
            alert("please enter your name")
            return
        }
        if(!email){
            alert("please enter your email")
            return
        }
        if(!password){
            alert("please enter your password")
            return
        }
        if(!confirmpass){
            alert("please enter confirm password")
            return
        }
        if(!(regEx.test(email))){
            alert("please enter valid email")
            return
        }
        if(password!=confirmpass){
            alert("password should same")
            return
        }
      
  
     try{
        const response = await axios.post(`https://instagram-express-app.vercel.app/api/auth/signup`, {
            name:name,
            email:email,
            password:password,
            })
         if(response?.data?.success){
            localStorage.setItem('signupuserauth', JSON.stringify(response?.data))
                alert(response?.data?.message)
                window.location.href='/login'
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
                <h1 className='heading'>create new account</h1>
                <div className='input-group'>
                    <label className='input-label' htmlFor='name'>Name</label>
                    <input type='text' placeholder='enter you full name' id='name' className='input-field' value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} />
                </div>
                <div className='input-group'>
                    <label className='input-label' htmlFor='email'>Email</label>
                    <input type='email' placeholder='enter you email'id='email' className='input-field'
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
                <div className='input-group'>
                    <label className='input-label' htmlFor='confirmpass'>Confirm Password</label>
                    <input type='password' placeholder='confirm password' id='confirmpass' className='input-field'
                    value={confirmpass} onChange={(e) => {
                        setConfirmpass(e.target.value)
                    }}  />
                </div>
               <Link to={'/login'} className='hyperlink-text'><div className='text'>Already Have An Account</div></Link> 
                <button className='btn' type='button' onClick={postApiOfUser}>sign up</button>

            </div>

        </div>
    )
}
