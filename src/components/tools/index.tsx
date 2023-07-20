import styles from "./styles.module.scss"
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

export default function ContainerTools() {
    return (

        <ul className={styles.container}>
            <li>
                <FaReact size={100} style={{
                        color:  "#ADB5BD",
                        cursor: 'pointer',
                        margin: "0"
                }}/>
            </li>
            <li>
                <TbBrandNextjs size={100} style={{
                        color:  "#ADB5BD",
                        cursor: 'pointer',
                        margin: "0"
                }}/>
            </li>
            <li>
                <FaJs size={100} style={{
                        color:  "#ADB5BD",
                        cursor: 'pointer',
                        margin: "0"
                }}/>
            </li>
            <li>
                <SiTypescript size={100} style={{
                        color:  "#ADB5BD",
                        cursor: 'pointer',
                        margin: "0"
                }}/>
            </li>
            <li>
                <FaNode size={100} style={{
                        color:  "#ADB5BD",
                        cursor: 'pointer',
                        margin: "0"
                }}/>
            </li>
            <li>
                <FaPython size={100} style={{
                        color:  "#ADB5BD",
                        cursor: 'pointer',
                        margin: "0"
                }}/>
            </li>
            <li>
                <SiPostgresql size={100} style={{
                        color:  "#ADB5BD",
                        cursor: 'pointer',
                        margin: "0"
                }}/>
            </li>
            <li>
                <FaGit size={100} style={{
                        color:  "#ADB5BD",
                        cursor: 'pointer',
                        margin: "0"
                }}/>
            </li>
            <li>
                <FaHtml5 size={100} style={{
                        color:  "#ADB5BD",
                        cursor: 'pointer',
                        margin: "0"
                }}/>
            </li>
            <li>
                <FaCss3Alt size={100} style={{
                        color:  "#ADB5BD",
                        cursor: 'pointer',
                        margin: "0"
                }}/>
            </li>
            <li>
                <FaSass size={100} style={{
                        color:  "#ADB5BD",
                        cursor: 'pointer',
                        margin: "0"
                }}/>
            </li>
        </ul>
    )
}