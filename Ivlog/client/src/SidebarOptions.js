import React from 'react'
import "./SidebarOption.css"

function SidebarOptions({options}) {
  return (
    <div className="sidebarOptions">
        <h2> 
        {options}
        </h2>
    </div>
  )
}

export default SidebarOptions