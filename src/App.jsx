// import React from 'react'
import Navbar from '../components/Navbar'
import Post from '../components/Post'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/SideBar'
import { data, data2 } from './Data'
const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="side-bar"> <Sidebar /></div>
        <div className="post-section"> {data.map((d) => <Post key={d.id} data={d} />)}</div>
        <div className="right-bar"> {data2.map((dd) => (<Rightbar key={dd.id} data={dd} />))}</div>
      </div>
    </>
  )
}

export default App
