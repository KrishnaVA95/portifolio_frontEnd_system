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
            <li className={styles.containerTool}>
                <div className={styles.box}>
                    <div className={styles.content}>
                        <FaReact size={100} style={{
                            color:  "#ADB5BD",
                            margin: "0"
                        }}/>
                    </div>
                </div>
                <span className={styles.toolName}>React</span>
            </li>
            <li className={styles.containerTool}>
                <div className={styles.box}>
                    <div className={styles.content}>
                        <TbBrandNextjs size={100} style={{
                            color:  "#ADB5BD",
                            margin: "0"
                        }}/>
                    </div>
                </div>
                <span className={styles.toolName}>Next.js</span>
            </li>
            <li className={styles.containerTool}>
                <div className={styles.box}>
                    <div className={styles.content}>
                        <FaJs size={100} style={{
                            color:  "#ADB5BD",
                            margin: "0"
                        }}/>
                    </div>
                </div>
                <span className={styles.toolName}>JS</span>
            </li>
            <li className={styles.containerTool}>
                <div className={styles.box}>
                    <div className={styles.content}>
                        <SiTypescript size={100} style={{
                            color:  "#ADB5BD",
                            margin: "0"
                        }}/>
                    </div>
                </div>
                <span className={styles.toolName}>TS</span>
            </li>
            <li className={styles.containerTool}>
                <div className={styles.box}>
                    <div className={styles.content}>
                        <FaNode size={100} style={{
                            color:  "#ADB5BD",
                            margin: "0"
                        }}/>
                    </div>
                </div>
                <span className={styles.toolName}>Node.js</span>
            </li>
            <li className={styles.containerTool}>
                <div className={styles.box}>
                    <div className={styles.content}>
                        <FaPython size={100} style={{
                            color:  "#ADB5BD",
                            margin: "0"
                        }}/>
                    </div>
                </div>
                <span className={styles.toolName}>Python</span>
            </li>
            <li className={styles.containerTool}>
                <div className={styles.box}>
                    <div className={styles.content}>
                        <SiPostgresql size={100} style={{
                            color:  "#ADB5BD",
                            margin: "0"
                        }}/>
                    </div>
                </div>
                <span className={styles.toolName}>PSQL</span>
            </li>
            <li className={styles.containerTool}>
                <div className={styles.box}>
                    <div className={styles.content}>
                        <FaGit size={100} style={{
                            color:  "#ADB5BD",
                            margin: "0"
                        }}/>
                    </div>
                </div>
                <span className={styles.toolName}>Git</span>
            </li>
            <li className={styles.containerTool}>
                <div className={styles.box}>
                    <div className={styles.content}>
                        <FaHtml5 size={100} style={{
                            color:  "#ADB5BD",
                            margin: "0"
                        }}/>
                    </div>
                </div>
                <span className={styles.toolName}>HTML5</span>
            </li>
            <li className={styles.containerTool}>
                <div className={styles.box}>
                    <div className={styles.content}>
                        <FaCss3Alt size={100} style={{
                            color:  "#ADB5BD",
                            margin: "0"
                        }}/>
                    </div>
                </div>
                <span className={styles.toolName}>CSS3</span>
            </li>
            <li className={styles.containerTool}>
                <div className={styles.box}>
                    <div className={styles.content}>
                        <FaSass size={100} style={{
                            color:  "#ADB5BD",
                            margin: "0"
                        }}/>
                    </div>
                </div>
                <span className={styles.toolName}>Sass</span>
            </li>
        </ul>
    )
}