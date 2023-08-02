import React from 'react'
import Link from "next/link"
import { IconType } from 'react-icons'
import styles from './style.module.scss'

interface iSidebarItem{
    Icon: IconType
    text: string
    url: string
}

const SidebarItem = ({ Icon, text, url }: iSidebarItem) => {
  return (
    <Link href={url} className={styles.container}>
      <Icon  style={{
            color: "#fff",
      }}/>
      {text}
    </Link>
  )
}

export default SidebarItem