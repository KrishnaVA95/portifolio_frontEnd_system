import { TbBrandNextjs } from "react-icons/tb";
import { SiPostgresql, SiTypescript } from "react-icons/si";
import { FaGit, FaPython } from "react-icons/fa";
import {
    FaDocker,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaNode,
    FaReact,
    FaSass
  } from "react-icons/fa";


interface IToolCard {
    techName: string;
    specificCase?: boolean;
}

export default function ToolCard({ techName, specificCase }: IToolCard){

    if(techName == 'Python' && specificCase == true){
        return(
            <li>
                <FaPython size={200} style={{
                        color:  "rgba(255,255,255,0.05)",
                        cursor: 'pointer',
                        margin: "0"
                }}/>       
            </li>
        )
    }else if (techName == 'Python'){
        return(
            <li>
                <FaPython size={35} style={{
                        color:  "#ADB5BD",
                        cursor: 'pointer',
                        margin: "0"
                }}/>     
            </li>
        )        
    }else if (techName == 'PostegreSQL' &&  specificCase == true){
        return(
            <li>
                <SiPostgresql size={200} style={{
                        color:  "rgba(255,255,255,0.05)",
                        cursor: 'pointer',
                        margin: "0"
                }}/>     
            </li>
        )        
    }else if (techName == 'PostegreSQL'){
        return(
            <li>
                <SiPostgresql size={35} style={{
                        color:  "#ADB5BD",
                        cursor: 'pointer',
                        margin: "0"
                }}/>     
            </li>
        )        
    }else if (techName == 'Node.js' &&  specificCase == true){
        return(
            <li>
                <FaNode size={200} style={{
                        color:  "rgba(255,255,255,0.05)",
                        cursor: 'pointer',
                        margin: "0"
                }}/>     
            </li>
        )        
    }else if (techName == 'Node.js'){
        return(
            <li>
                <FaNode size={35} style={{
                        color:  "#ADB5BD",
                        cursor: 'pointer',
                        margin: "0"
                }}/>     
            </li>
        )        
    }else if (techName == 'TypeScript' &&  specificCase == true){
        return(
            <li>
                <SiTypescript size={200} style={{
                        color:  "rgba(255,255,255,0.05)",
                        cursor: 'pointer',
                        margin: "0"
                }}/>     
            </li>
        )        
    }else if (techName == 'TypeScript'){
        return(
            <li>
                <SiTypescript size={35} style={{
                        color:  "#ADB5BD",
                        cursor: 'pointer',
                        margin: "0"
                }}/>     
            </li>
        )        
    }else if (techName == 'React'  &&  specificCase == true){
        return(
            <li>
                <FaReact size={200} style={{
                        color:  "rgba(255,255,255,0.05)",
                        cursor: 'pointer',
                        margin: "0"
                }}/>    
            </li>
        )        
    }else if (techName == 'React'){
        return(
            <li>
                <FaReact size={35} style={{
                        color:  "#ADB5BD",
                        cursor: 'pointer',
                        margin: "0"
                }}/>    
            </li>
        )        
    }else if (techName == 'Next.js' &&  specificCase == true){
        return(
            <li>
                <TbBrandNextjs size={200} style={{
                        color:  "rgba(255,255,255,0.05)",
                        cursor: 'pointer',
                        margin: "0"
                }}/>     
            </li>
        )        
    }else if (techName == 'Next.js'){
        return(
            <li>
                <TbBrandNextjs size={35} style={{
                        color:  "#ADB5BD",
                        cursor: 'pointer',
                        margin: "0"
                }}/>     
            </li>
        )        
    }else if (techName == 'SASS' &&  specificCase == true){
        return(
            <li>
                <FaSass size={200} style={{
                        color:  "rgba(255,255,255,0.05)",
                        cursor: 'pointer',
                        margin: "0"
                }}/> 
            </li>
        )        
    }else if (techName == 'SASS'){
        return(
            <li>
                <FaSass size={35} style={{
                        color:  "#ADB5BD",
                        cursor: 'pointer',
                        margin: "0"
                }}/> 
            </li>
        )        
    }
}