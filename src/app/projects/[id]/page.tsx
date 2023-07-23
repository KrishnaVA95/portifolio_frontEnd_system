import { api } from "@/services/api"
import styles from "./styles.module.scss"
import { IProject } from "@/components/showcaseFlex"

interface IPageProps{
    params: {id: string}
}

export default async function ProjectDetail({ params }: IPageProps){
    const response = await api.get<IProject>(`/api/projects/${params.id}/`)
    const project =  response.data
    return(
        <div className={styles.container}>
            <p>{project.description}</p>
        </div>
    )
}

        {/* <video width="320" height="240" controls playbackRate="1.5">
            <source src="https://drive.google.com/file/d/1H7-kR1_X8A7n1aGFMQ0SDxW7ST2q3PIj/view?usp=drive_link" type="video/mp4"/>
        </video>   */}