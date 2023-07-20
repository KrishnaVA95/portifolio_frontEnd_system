import Link from "next/link"
import styles from "./styles.module.scss"


interface IBtnNeon {
    text: string;
    url: string;
}

export default function BtnAnchorStyleNeon({ text, url }: IBtnNeon){
    return(
         <Link  href={url}  className={styles.container}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {text} 
        </Link>

    ) 
        
}