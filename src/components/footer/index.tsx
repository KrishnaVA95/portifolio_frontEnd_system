import { userData } from "@/utils/userData";
import Link from "next/link"
import Image from 'next/image'
import styles from "./styles.module.scss"
import {FaWhatsapp} from "react-icons/fa";
import {AiFillLinkedin, AiTwotoneMail} from "react-icons/ai";
import logo from '@/public/static/img/logo/Logo_Branco_Krishna.png'
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
      <footer className={styles.container}>
        <div className={styles.my}>
            <Image
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={70}
                height={70}
                style={{ borderRadius: '100%' }}
            />

            
            <Link target="_blanck" href='https://github.com/KrishnaVA95'>
                        <FaGithub size={70} style={{
                          color:  "#fff",
                          cursor: 'pointer'
                        }}/>
            </Link>

        </div>
        <ul>
            <li className={styles.containerWhatsapp}>
                <Link href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}>
                    <FaWhatsapp size={25} style={{
                        color:  "#fff",
                    }}/>
                </Link>
            </li>
            <li className={styles.containerEmail}>
                <Link  href={`mailto:${userData.emailUser}`}>
                    <AiTwotoneMail size={25} style={{
                        color:  "#fff",
                    }}/>
                </Link>
            </li>
            <li className={styles.containerLinkedin}>
                <Link href='https://www.linkedin.com/in/krishnavarela/'>
                    <AiFillLinkedin size={25} style={{
                        color:  "#fff",
                    }}/>
                </Link>
            </li>
        </ul>
        <div>

            <Image src={logo} alt="Logo branco Krishna" width={150} height={50}/>
            <div className={styles.containerCredits}>
                <p>credits:</p>
                <p>Kenzie Academy Brasil</p>
                <p>Online Tutorials</p>
                <p>QuickCodingTuts</p>
            </div>
        </div>

      </footer>
  
    )
  }