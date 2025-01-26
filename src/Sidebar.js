import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {
  const user = useSelector(selectUser);


  const recentItem = (topic) => (
    <div className='sidebar-recentItem'>
      <span className='sidebar-hash'>#</span>
      <p> {topic} </p>
    </div>
  )


  return (
    <div className='sidebar'>
      <div className='sidebar-top'>
      <img src="/images/bg-img.avif" alt="Background" />
        <Avatar src={user.photoUrl} className='sidebar-avatar'> {user.email[0]} </Avatar>
        <h2> {user.displayName} </h2>
        <h4> Backend Engineer </h4>
        <h4> {user.email} </h4>

      </div>

      {/* <div className='sidebar-stats'>
        <div className='sidebar-stat'>
            <p> Who viewed you </p>
            <p className='sidebar-statNumber'> 2673 </p>
            </div>
            <div className='sidebar-stat'>
            <p> Views on posts </p>
            <p className='sidebar-statNumber'>5674 </p>
        </div>
      </div> */}

      <div className='sidebar-bottom'> 
        <p> Recent </p>
        {recentItem("reactjs")} 
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("developer")}
        {recentItem("design")}
        {recentItem("blockchain")}

      </div>
    </div>

  )
}

export default Sidebar;
