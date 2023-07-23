"use client"
import { useState } from "react";
import Image from 'next/image'
import logo from '@/public/static/img/logo/Logo_Branco_Krishna.png'
import useMedia from 'use-media';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Link from "next/link"
import styles from "./styles.module.scss"

export default function NavBar() {
    const isWide = useMedia({ maxWidth: "999px" });
    const [open, setOpen] = useState(false);

    const OpenMenu = () => {
      setOpen(!open);
    };

    return (
      <section className={styles.containerNavbar}>
        <div>
            <Image src={logo} alt="Logo branco Krishna" width={120} height={30}/>
        </div>
        {isWide && (
            <div
              
              onClick={OpenMenu}
              aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
            >
              {!open ? <FaBars   size={30} style={{
                        color:  "#ADB5BD",
                        cursor: 'pointer'
                }}/> : <IoClose size={30} style={{
                    color:  "#ADB5BD",
                    cursor: 'pointer'
            }}/>}
            </div>
          )}
          <nav>
            {isWide ? open && <NavLinks /> : <NavLinks />}
          </nav>

      </section>
  
    )
}

  export const NavLinks = (): JSX.Element => {
    return (
      <section className={styles.containerNavlist}>
        <Link  href='/'>
          Home
        </Link>
        <Link href='/projects'>
          Projects
        </Link>
        <Link  href='/contacts'>
          Contact
        </Link>
        <Link  href='/accounts/login'>
          Login
        </Link>
      </section>
    );
  };