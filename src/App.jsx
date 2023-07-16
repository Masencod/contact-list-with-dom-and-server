import { useState } from 'react'
import { Route,Routes, } from 'react-router-dom'
import Home from './Components/Home'
import NewContact from './Components/NewContact'
import Contact from './Components/Contact'


function App() {


  return (
    <>
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<Contact/>}/>
        <Route path='/new-contact' element={<NewContact/>}/>
      </Routes>
    </>
  )
}

export default App
