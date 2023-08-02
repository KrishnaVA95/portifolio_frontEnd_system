import BtnAnchorStyleNeon from "../buttons/btnAnchor"
import ContainerTools from "../tools"
import styles from "./styles.module.scss"
import { FaGithub } from "react-icons/fa";
import Link from "next/link"
import { userData } from "@/utils/userData";
import Image from 'next/image'

export default function MyPresentation() {
    return (
      <div className={styles.container}>
            <div className={styles.containerInfo}>
                <div>
                  <div  className={styles.myPreview}>
                    <h2>
                        <Image
                            src={`https://github.com/${userData.githubUser}.png`}
                            alt={userData.nameUser}
                            title={userData.nameUser}
                            width={50}
                            height={50}
                            style={{ borderRadius: '100%' }}
                        />
                        <span>Olá
                        
                      </span>
                      , seja bem vindo
                    </h2>
                    <h2>Eu sou, <span>Krishna Varela</span></h2>
                    <h2>Desenvolvedor web, <span>Full-Stack</span></h2>
                    <p>Conheça aqui neste ambiente, criado especialmente para você, todos os meus projetos e tecnologias</p>
                  </div>
                  <div className={styles.containerBtns}>

                      <Link target="_blanck" href='https://github.com/KrishnaVA95'>
                        <FaGithub size={35} style={{
                          color:  "#fff",
                          cursor: 'pointer'
                        }}/>
                      </Link>
                        <BtnAnchorStyleNeon text='acessar projetos' url='/projects'/>
                        {/* <BtnAnchorStyleNeon text='Repositório' url='/'/> */}

                  </div>
                </div>
                <article>
                  <ContainerTools/>
                </article>
            </div>

            <div  className={styles.containerImage}>
                
            </div>

      </div>
  
    )
}