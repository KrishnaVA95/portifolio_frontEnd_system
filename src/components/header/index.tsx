'use client'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../sidebar'
import style from './styles.module.scss'
import Link from "next/link"
import Image from 'next/image'
import logo from '@/public/static/img/logo/Logo_Branco_Krishna.png'

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <header className={style.container}>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
      <Link href='/'>
        <Image src={logo} alt="Logo branco Krishna" width={120} height={30}/>
      </Link>
    </header>
  )
}

export default NavBar

