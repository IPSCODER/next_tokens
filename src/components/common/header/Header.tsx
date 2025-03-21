"use client"
import { RootState } from '@/store/store'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const name = useSelector((state:RootState) => state.user.email)
  return (
    <div className='flex gap-4 px-4 h-10 items-center' >
        <Link href={"/"} >Home</Link>
        <Link href={"/dummy"} >Dummy</Link>
        <Link href={"/revalidate-path"} >Revalidate Path</Link>
        <Link href={"/login"} className='ml-auto' >Login</Link>
        {name && <span>{name}</span>}
    </div>
  )
}

export default Header