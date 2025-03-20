"use client"
import React from 'react'

 const RefreshApi = ({refreshData}:any) =>{
    "use client"
  
    React.useEffect(() =>{
      const x = setInterval(() =>{
        refreshData();
      },300000)
      console.log("running")
  
     return () => clearInterval(x)
    },[])
  
    return <>
    <h1>client component</h1>
    </>
  }

  export default RefreshApi