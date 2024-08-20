
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
const Footer = () => {
    
  return (
    <div className={styles.container}>
      <div className={styles.text}>@2024 Sekhar || All rights reserved</div>
      <div className={styles.imageContainer}>
        <Image src="/1.png" className={styles.icon} height={15} width={15} alt='sekhar'/>
        <Image src="/2.png" className={styles.icon} height={15} width={15} alt='sekhar'/>
        <Image src="/3.png" className={styles.icon} height={15} width={15} alt='sekhar'/>
        <Image src="/4.png" className={styles.icon} height={15} width={15} alt='sekhar'/>
      </div>
    </div>
  )
}

export default Footer
 