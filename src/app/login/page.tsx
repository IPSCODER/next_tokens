"use client"
import { getLogin } from '@/api/services/auth.services'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const LoginPage = () => {

    const dispatch = useDispatch();
    const [loginData,setLoginData] = useState({
        email:"",
        password:""
    })

    const changeHandler = (e:any) =>{
        const {name,value} = e.target;
        setLoginData(prevSate => ({
            ...prevSate, [name]:value
        }))
    }

    const onSubmit =  async (e:any) =>{
        e.preventDefault()
        const response = await dispatch(getLogin(loginData))
        console.log(response);
        

    }

  return (
    <>
    <form onSubmit={onSubmit} className='p-2 flex flex-col gap-2 w-1/2 border-2 border-white' >
        <input type="email" placeholder='Enter Your Mail' name='email' value={loginData.email} onChange={changeHandler} />
        <input type="password" placeholder='Enter Your Password' name="password" value={loginData.password} onChange={changeHandler} />
        <button type='submit' >Submit</button>
    </form>

    </>
  )
}

export default LoginPage