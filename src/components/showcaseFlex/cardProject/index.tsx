
import styles from "./styles.module.scss"
import { IProject } from ".."
import BtnAnchorStyleNeon from "@/components/buttons/btnAnchor"

interface ICardProject {
    project: IProject
}

export default function CardProject({ project }: ICardProject){
    return(
        <li className={styles.container}>
            <p>{project.title}</p>
            <BtnAnchorStyleNeon text='detalhe' url={`/projects/${project.id}`}/>
        </li>
    )
}