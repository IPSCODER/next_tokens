import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex gap-4' >
        <Link href={"/"} >Home</Link>
        <Link href={"/dummy"} >Dummy</Link>
        <Link href={"/revalidate-path"} >Revalidate Path</Link>
    </div>
  )
}

export default Header