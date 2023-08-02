import Link from "next/link"
import styles from "./styles.module.scss"
import {FaWhatsapp} from "react-icons/fa";
import {AiFillLinkedin, AiTwotoneMail} from "react-icons/ai";
import { userData } from "@/utils/userData";

export default function ContainerContact() {
    return (
      <section className={styles.container}>
        <article>
            <h2>Construa o seu <span>sonho</span> online,</h2>
            <h2><span>Inspiração</span> em cada detalhe</h2>
        </article>
        <ul>
            <li>
                <span className={styles.containerWhatsapp}>
                    <FaWhatsapp size={25} style={{
                        color:  "#fff",
                    }}/>
                </span>
                <div>
                    <h3>My Whatsapp</h3>
                    <Link href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}>Ir para conversa</Link>
                </div>
            </li>
            <li>
                <span className={styles.containerEmail}>
                    <AiTwotoneMail size={25} style={{
                        color:  "#fff",
                    }}/>
                </span>
                <div>
                    <h3>My Email</h3>
                    <Link href={`mailto:${userData.emailUser}`}>Enviar email</Link>
                </div>
            </li>
            <li>
                <span className={styles.containerLinkedin}>
                    <AiFillLinkedin size={25} style={{
                        color:  "#fff",
                    }}/>
                </span>
                <div>
                    <h3>My Linkedin</h3>
                    <Link href='https://www.linkedin.com/in/krishnavarela/' target="blank">Acessar</Link>
                </div>
            </li>
        </ul>
      </section>
  
    )

}