// import React from 'react'
// import { HiOutlineDotsVertical } from 'react-icons/hi';
// import { FaComment, FaHeart, FaShare } from 'react-icons/fa';
import './RightBar.css'
const Rightbar = ({data}) => {
  return (
    <>
      <div className="right-container">
        <div className="rightbar-postImg">
        <div className="img">
          <img src={data.img} alt="" />
        </div>
          <div className="rightbar-inside-img">
            <div className="img">
              <img  src={data.authorImg} alt="" />
            </div>
            <div className="text">
              <h3>{data.authorName}</h3>
              <p>{data.authortext}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rightbar
