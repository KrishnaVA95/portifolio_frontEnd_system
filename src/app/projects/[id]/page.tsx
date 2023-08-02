
import { api } from "@/services/api"
import styles from "./styles.module.scss"
import { IProject } from "@/components/showcaseFlex"
import BtnAnchorStyleNeon from "@/components/buttons/btnAnchor"
import ContainerVideo from "@/components/containerVideo"
import ToolCard from "@/components/tools/toolCard"
import Footer from "@/components/footer"

interface IPageProps{
    params: {id: string}
}

export interface ITech{
    id: number;
    name: string;
    created_at: string;
    icon: string | null;
}

interface ILib{
    id: number;
    name: string;
    created_at: string;
    icon: string | null;
}

export default async function ProjectDetail({ params }: IPageProps){
    const response = await api.get<IProject>(`/api/projects/${params.id}/`)
    const project =  response.data
    return(
        <>
        <div className={styles.container}>
            <header>
                <h1>{project.title}</h1>
                <ul className={styles.containerTech}>
                    {project.technologies.map((tech: ITech ) =>(
                    <ToolCard key={tech.id} techName={tech.name}/>    
                    ))}
                </ul>
            </header>
            
            <div className={styles.containerVideo}>
                {project.video == null ?  <></> : <ContainerVideo video={project.video}/>}
            </div>

            <div className={styles.containerBtns}>
            {project.deploy == null ? <></> : <BtnAnchorStyleNeon url={project.deploy} text='Deploy'/>}

            {project.repository == null ? <></> : <BtnAnchorStyleNeon url={project.repository} text='Repository'/>}
            </div>
            
            <ul className={styles.containerParagraph}>
                {project.content.map((paragraph: string ) =>(
                    <li key={paragraph.slice(0, 15)}>{paragraph}</li> 
                ))} 
            </ul>

            <ul className={styles.containerLibs}>
                <h3>Libs</h3>
                {project.libs.map((lib: ILib ) =>(
                    <li key={lib.id}>{lib.name}</li> 
                ))} 
            </ul>

            <ul className={styles.containerCredits}>
                <h3>Credits</h3>
                {project.credits == null ? <></> : project.credits.map((paragraph: string ) =>(
                    <li key={paragraph.slice(0, 15)}>{paragraph}</li> 
                ))} 
            </ul>
        </div>
        <Footer/>
        </>
    )
}
