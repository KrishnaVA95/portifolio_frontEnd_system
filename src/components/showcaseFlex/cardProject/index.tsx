
import styles from "./styles.module.scss"
import { IProject } from ".."
import BtnAnchorStyleNeon from "@/components/buttons/btnAnchor"
import TollCard from "@/components/tools/tollCard"
import { ITech } from "@/app/projects/[id]/page"


interface ICardProject {
    project: IProject
}

export default async function CardProject({ project }: ICardProject){

    return(
        <li className={styles.container}>
            <div className={styles.box}>
                <div className={styles.content}>
                    <div className={styles.primaryTech}>
                        <TollCard techName={project.technologies[0].name} specificCase={true}/>
                    </div>
                    <h3>{project.title}</h3>
                    <p className={styles.description}> {project.description}</p>
                    <BtnAnchorStyleNeon text='detalhe'  url={`/projects/${project.id}`}/>
                    <ul>
                        {project.technologies.map((tech: ITech ) =>(
                        <TollCard key={tech.id} techName={tech.name}/>    
                        ))}
                    </ul>

                </div>

            </div>

        </li>
    )
}