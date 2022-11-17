import React,{useEffect, useState} from 'react'
import { Card, Navbar } from '../../components'

const PostviewPage = () => {
  // const[users,setusers]=useState([])
  // useEffect(()=>{
  //   fetch("http://localhost:3004/users")
  //   .then(res=>{
  //     return res.json()
  //   }).then((data)=>{
  //       setusers(()=>[...data])
  //   })

  // },[])

  return (
    <div>
    <Navbar/>
    {/* {users.map((personDetails,index)=>{
     return <Card key={index} personDetails={personDetails}/>
    })
    } */}
    hi from post view
    </div>
  )
}

export default PostviewPage

