import React from "react"
import Navbar from "./component/Navbar/Navbar"

import { Route, Routes } from "react-router-dom"
import Footer from "./component/Footer/Footer"
import Home from "./component/Home/Home"
import Register from "./component/Register/Register"
import Login from "./component/Login/Login"
import Homeguest from "./component/Home/Homeguest"
import About from "./component/About/About"
import StatusKegiatan from "./component/StatusKegiatan/StatusKegiatan"
import KegiatanActive from "./component/StatusKegiatan/KegiatanActive"
import ListRelawan from "./component/ListRelawan/ListRelawan"
import DetailKegiatanList from "./component/DetailKegiatan/DetailKegiatanList"
import DetailKegiatanStatus from "./component/DetailKegiatan/DetailKegiatanStatus"
import Form from "./component/Form/Form"





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
            <Route path="/About" element={<About/>}/>
            <Route path="/Relawan" element={<ListRelawan/>}/>
            <Route path="/Kegiatan" element={<StatusKegiatan/>}/>
            <Route path="/kegiatan-active" element={<KegiatanActive/>}/>
            <Route path="/detail-kegiatan/:id" element={<DetailKegiatanStatus/>}/>
            <Route path="/detail-relawan/:id" element={<DetailKegiatanList/>}/>
            <Route path="/daftar/:id" element={<Form/>}/>
        </Route>
      </Routes>
      <Footer>
      </Footer>
    </>
  )
}

export default App
