import React from 'react'
import 
 {BsFillBellFill, BsPersonCircle, BsJustify , BsFillStarFill}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsFillStarFill  className='icon'/>
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icon'/>
            
            <BsPersonCircle className='icon'/>
        </div>
    </header>
  )
}

export default Header