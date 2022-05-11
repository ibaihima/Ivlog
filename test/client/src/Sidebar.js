import React from 'react'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions'

function Sidebar() {
  return (
    <div className='sideBar'>
        <SidebarOptions options='Home'/>
        <SidebarOptions options='Profile'/>
        <SidebarOptions options='Favorites'/>
        

    </div>
  )
}

export default Sidebar