import { IErrorProps } from "@/app/projects/error"
import styles from "./styles.module.scss"



export default function ContainerError({ reset }: IErrorProps) {
    return (
      <div className={styles.container}>
            <h2>Algo deu errado</h2>
            <button onClick={reset}>
                Tentar novamente
            </button>
      </div>
  
    )
}