// import React from 'react'
import { HiOutlineDotsVertical } from 'react-icons/hi';
import './post.css'
import { FaComment, FaHeart, FaShare } from 'react-icons/fa';
const Post = ({data}) => {
  return (
    <>
    <div className='post-total-content'>
      <div className="post_container">
        <div className="author">
          <div className="img">
            <img
              src={data.pImg}
              alt=""
            />
          </div>
          <div className="text">
            <h3>{data.title}</h3>
            <p>{data.userName}</p>
          </div>
        </div>
        <div className="dot"><HiOutlineDotsVertical/></div>
      </div>
      <p>{data.description}</p>
      <div className="post_img">
        <img src={data.mImg} alt="" />
      </div>
      <div className="post__comment_tags">
        <div className="tag_1"><FaHeart/> {data.like} k</div>
        <div className="tag_2"><FaComment/> {data.comment}K</div>
        <div className="tag_3"><FaShare/> {data.share}K</div>
      </div>
      </div>
    </>
  );
};

export default Post;
