import React from 'react'
import style from './styles.module.scss'
import { 
  FaTimes, 
  FaHome, 
} from 'react-icons/fa'
import { 
  BiSolidContact
} from 'react-icons/bi'
import { 
  GrProjects
} from 'react-icons/gr'
import { 
  GoProjectSymlink
} from 'react-icons/go'

import SidebarItem from './sidebarItem'

interface iSidebar{
  active:  React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({ active }: iSidebar) => {

  const closeSidebar = () => {
    active(false)
  }



  return (
    <div className={style.container}>
      <FaTimes onClick={closeSidebar} />  
      <nav className={style.containerNav}>
          <SidebarItem Icon={FaHome} text="Home" url='/'/>
          <SidebarItem  Icon={GoProjectSymlink} text="Projects" url='/projects' />
          <SidebarItem  Icon={BiSolidContact} text="Contact" url='/contacts' />
      </nav>
    </div>
  )
}

export default Sidebar
