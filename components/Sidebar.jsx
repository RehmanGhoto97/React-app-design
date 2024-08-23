
// import React from 'react'
import './sidebar.css'

import { FaHome, FaYoutube } from "react-icons/fa"
import { FaBagShopping } from "react-icons/fa6"
import { IoIosNotifications } from "react-icons/io"
import { IoIosChatboxes } from "react-icons/io"
import { CgProfile } from "react-icons/cg";
import { RiLoginBoxFill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar_content">
        <div className="top_content">
          <div className="item"><FaHome/>   Home</div>
          <div className="item"><IoIosNotifications/> Notification</div>
          <div className="item"><FaBagShopping/> Shop</div>
          <div className="item"><IoIosChatboxes/> Conversation</div>
          <div className="item"><FaWallet/> Wallet</div>
          <div className="item"><FaYoutube/> Subscription</div>
          <div className="item"><CgProfile/> My profile</div>
        </div>
        <div className="bottom_content"><RiLoginBoxFill/> Log out</div>
      </div>

    </>
  )
}

export default Sidebar