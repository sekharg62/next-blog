import Image from "next/image";
import styles from './page.module.css'
import Hero from '../../public/hero.png'
import Button from "@/components/Button.jsx/Button";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque accusantium distinctio doloremque libero repudiandae. Perspiciatis?</p>
        <Button url="/portfolio" text="See Our Products"/>
      
      </div>
      <div className={styles.imgContainer}>

        <Image src={Hero} alt="hero" className={styles.heroImg} />
      </div>

    </div>

  );
}
