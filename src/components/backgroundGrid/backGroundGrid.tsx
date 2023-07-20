'use client'
import styles from "./styles.module.scss"
import { useEffect, useRef } from "react";


export default function HexGridBackGround({ children }: any) {
    const light = useRef<any>({current: null});
    const hexGrid = useRef<any>(null);

    useEffect(() => {
        hexGrid.current.addEventListener("mousemove", (e: any) => {
            light.current.style.left = `${e.clientX}px`
            light.current.style.top = `${e.clientY}px`
        });
    }, []);
    

    return (
      <main className={styles.container} >
        <div ref={hexGrid} className={styles.hexGrid}>
            <div ref={light} className={styles.light}></div>
            <div  className={styles.grid}>
              { children }
            </div>

        </div>
      </main>
    )
}