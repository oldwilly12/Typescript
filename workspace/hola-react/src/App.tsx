// import { useState } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import UserForm from './forms/User'

function App() {
  return (
    <>
      <div className="App">
        <UserForm handleSubmit={user => {console.log(user)}}/>
      </div>
    </>
  )
}

export default App
