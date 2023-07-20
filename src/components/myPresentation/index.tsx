import BtnAnchorStyleNeon from "../buttons/btnAnchor"
import ContainerTools from "../tools"
import styles from "./styles.module.scss"

export default function MyPresentation() {
    return (
      <div className={styles.container}>
            <div className={styles.containerInfo}>
                <div>
                  <div  className={styles.myPreview}>
                    <h2><span>Olá</span>, seja bem vindo</h2>
                    <h2>Eu sou, <span>Krishna Varela</span></h2>
                    <h2>Desenvolvedor web, <span>Full-Stack</span></h2>
                    <p>Conheça aqui neste ambiente, criado especialmente para você, todos os meus projetos e tecnologias</p>
                  </div>
                  <div className={styles.containerBtns}>
                      <BtnAnchorStyleNeon text='acessar projetos' url='/'/>
                      <BtnAnchorStyleNeon text='Repositório' url='/'/>

                  </div>
                </div>
                <ContainerTools/>
            </div>

            <div  className={styles.containerImage}>
                
            </div>

      </div>
  
    )
}