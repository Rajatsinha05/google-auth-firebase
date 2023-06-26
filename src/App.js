import { useState } from 'react'
import './App.css'
import { emailAuth, googleauth, logout, reset } from './Config'

function App () {
  const handlesignup = () => {
    googleauth().then(user => {
      console.log(user.user.providerData[0].email)
    })
  }

  const handlesignout = () => {
    logout().then(() => {
      console.log('logged out')
    })
  }
  let[email,setEmail]=useState('')
  let[password,setPassword]=useState('')
  const submit = (e) => {
    e.preventDefault()
    emailAuth(email,password)
    .then((ele)=>console.log(ele.user))
    .catch((err)=>{
       alert(err.message)
     })
  }

  const forget=()=>{
    reset("daksh1or2@gmail.com").then((ele)=>console.log(ele))
    .catch((err)=>console.log(err.message))
  }
  return (
    <div className='App'>
      <button onClick={handlesignup}>Sign in with Google</button>
      <button onClick={handlesignout}>logout</button>

      <hr />

      <form onSubmit={submit}> 
        <input type='text' onChange={(e)=>setEmail(e.target.value)}/>
        <input type='text' onChange={(e)=>setPassword(e.target.value)} />
        <input type='submit' />
      </form>
      <button onClick={forget}>reset</button>
    </div>
  )
}

export default App
