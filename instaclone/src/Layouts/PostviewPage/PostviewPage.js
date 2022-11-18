import React,{useEffect, useState} from 'react'
import { Card, Navbar } from '../../components'

const PostviewPage = () => {
  const[users,setusers]=useState([])
  useEffect(()=>{
    fetch("http://localhost:8081/posts")
    .then(res=>{
      return res.json()
    }).then((data)=>{
        console.log("fetched data",data)
        setusers(()=>[...data])
    })

  },[])

  return (
    <div>
    <Navbar/>
    {users?.map((personDetails,index)=>{
     return <Card key={index} personDetails={personDetails}/>
    })
    }
    {users.length==0 && <p>No post...Try to upload images by clicking top right icon 📷</p>}
    </div>
  )
}

export default PostviewPage

