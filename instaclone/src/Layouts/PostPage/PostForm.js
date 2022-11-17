import React, { useState,useEffect } from 'react'

const PostForm = () => {
const[state,setState]=useState({
    Author:"",
    Location:"",
    Description:"",
    files:null
})
const initialState={
    Author:"",
    Location:"",
    Description:"",
    files:null
}
// const[error,setError]=useState("")
const[disabled,setDisabled]=useState(true)
function onChangeSetState(e){
if(e.target.name !=="files"){
    let updated={...state}
    updated[e.target.name]=e.target.value
    setState(updated)
}
if(e.target.name ==="files"){
    let updated={...state}
    updated[e.target.name]=e.target.files
    setState(updated)
}
}
useEffect(()=>{
    let setCondtion=false
    for (let i of Object.keys(state)){
        // console.log("state ==>",state[i])
         if(state[i]=="" || state[i]==null){
             setCondtion=false
             setDisabled(()=>true)
             break
         }else{
             setCondtion=true
         }
    }
    if(setCondtion){
     setDisabled(()=>false)
    }
},[state])

function postToServer(e){
    // console.log(state)
    e.preventDefault()
    const formData = new FormData();
    formData.append(
        "images",
        state.files
        );
let dataToBeSend={}
for (let i of Object.keys(state)){
    if(i!=="files"){
        dataToBeSend[i]=state[i]
    }
}
  
}
const{Author,Location,Description}=state
  return (
    <div className="">
    <form  onSubmit={postToServer} >
        <input type="file" onChange={(e)=>onChangeSetState(e)}  name="files"/>
        <input type="text" value={Author} onChange={(e)=>onChangeSetState(e)}  placeholder="Author" name="Author"/>
        <input type="text" value={Location} onChange={(e)=>onChangeSetState(e)}  placeholder="Location" name="Location"/>
        <input type="text" value={Description} onChange={(e)=>onChangeSetState(e)} placeholder="Description" name="Description"/>
        <button disabled={disabled}  >Post</button>
    </form>
    </div>
  )
}

export default PostForm