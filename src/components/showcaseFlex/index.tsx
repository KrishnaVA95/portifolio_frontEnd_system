import { api } from "@/services/api";
import styles from "./styles.module.scss"
import CardProject from "./cardProject";

interface ITech{
    id: number;
    name: string;
    created_at: string;
    icon: string | null;
}
interface ILibs{
    id: number;
    name: string;
    created_at: string;
    icon: string | null;
}

export interface IProject {
    id: number;
    title: string;
    repository: string;
    deploy: string | null;
    video: string | null;
    cover: string | null;
    description: string;
    credits: string[] | null;
    content: string[];
    libs: ILibs[];
    technologies: ITech[];
    highlighted: boolean;
    created_at: string;
}

export interface IResponseGetProjects{
    count: number;
    next: string | null;
    previous: string | null;
    results: IProject[];
}

export async function getProjects(n: number) {
    try {
        const response = await api.get<IResponseGetProjects>(`/api/projects/?page=${n}`)
        // console.log(response.data)

        return response.data
    } catch (error) {
        console.error(error)
        throw new Error('Failed get itens api')
    }
}

export default async function ShowcaseFlex(){
    const data = await getProjects(1)
    const projects : IProject[] = data.results
    const nextPage = data.next
    const previousPage = data.previous
    return(
        <>
            <ul className={styles.container}>
                {projects.map((project: IProject ) =>(
                <CardProject key={project.id} project={project}/>    
                ))}
            </ul>
            {/* <Pagination nextPage={nextPage} previousPage={previousPage} /> */}
        </>

    ) 
        
}