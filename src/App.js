import React from "react"
import Navbar from "./component/Navbar/Navbar"

import { Route, Routes } from "react-router-dom"
import Footer from "./component/Footer/Footer"
import Home from "./component/Home/Home"
import Register from "./component/Register/Register"
import Login from "./component/Login/Login"
import Homeguest from "./component/Home/Homeguest"





//npm install react-router-dom@5

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route>
            <Route path="/" element={<Home/>}/>
            <Route path="/Home" element={<Homeguest/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
        </Route>
      </Routes>
      <Footer>
      </Footer>
    </>
  )
}

export default App
