// import React from 'react'
import { IoFilter } from "react-icons/io5";
import  "./Navbar.css";
import { FcSearch } from "react-icons/fc"

const Navbar = () => {
  return (
    <div className="navBarAll">
      <div className="nav-bar">
        <div className="logo">WDM</div>
        <div className="search">
          <div className="left"><FcSearch /> Search here....</div>
          <div className="right"><IoFilter /> Filter</div>
        </div>
        <div className="seller">Becom a seller</div>
      </div>
    </div>
  )
}

export default Navbar