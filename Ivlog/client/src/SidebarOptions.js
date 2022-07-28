import React from 'react'
import "./SidebarOption.css"

function SidebarOptions({options,handleClick}) {
  return (
    <div className="sidebarOptions">
        <h2 onClick={handleClick}> 
        {options}
        </h2>
    </div>
  )
}

export default SidebarOptions