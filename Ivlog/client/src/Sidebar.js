import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom';
import SidebarOptions from './SidebarOptions'

function Sidebar() {
  return (
    <div className='sideBar'>
      <Link to="/home">
        <SidebarOptions options='Home'/>
      </Link>
      <Link to="/profile">
        <SidebarOptions options='Profile'/>
      </Link>
      <Link to="/favorites">
        <SidebarOptions options='Favorites'/>
      </Link>
    </div> 
  )
}



export default Sidebar