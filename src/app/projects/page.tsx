import ShowcaseFlex from "@/components/showcaseFlex";
import styles from './styles.module.scss'
import Footer from "@/components/footer";

export default function Projects() {
    return (
      <>
      <main className={styles.container}>
        <ShowcaseFlex/>
      </main>
        <Footer/>
      </>

    )
}