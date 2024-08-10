import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button.jsx/Button'
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill={true} alt='about' className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Hardcrafting award winning digital experience</h2>
        </div>

      </div>
      <div className={styles.textContainer}>

        <div className={styles.item}>
          <h1 className={styles.title}>Who Are we ?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum vero atque porro? Vitae similique laboriosam molestias ex.<br/>cupiditate consequatur quis fugit consectetur quibusdam, necessitatibus temporibus eos assumenda saepe fuga ab alias ut dolore debitis fugiat doloremque consequuntur praesentium at aliquam? Ipsam quas veritatis iusto maxime aspernatur<br/><br/> assumenda, dolores quaerat! Eaque explicabo, suscipit, reiciendis accusamus quae totam corporis omnis ipsam maiores ullam sapiente iste accusantium quia harum molestiae tempore veritatis et minima sed perferendis? Sit officia maiores quas blanditiis reiciendis!</p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>What we do ?</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum vero atque porro? Vitae sestias ex.<br/>cupiditate consequatur quis fugit consectetur quibusdam, neceugiat doloremque consequuntur praesentium at aliquam? Ipsam quas veritatis iusto maxime aspernat ur<br/><br/> assumenda, dolores quaerat! Eaque explicabo, suscipit, reiciendis accusamuestiae tempore veritatis et minima sed perferendis? Sit officia maiores quas blanditiis reiciendis!</p>
        <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  )
}

export default About
