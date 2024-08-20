import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import ContactImg from '../../../public/contact.png'
import Button from '@/components/Button/Button.jsx'
export const metadata = {
  title: "Blog-Contact",
  description: "This is  description of Contact",
};
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContent}>
          

        </div>
        <form action="" className={styles.form}>
          <input type="text" placeholder='name' className={styles.input} />
          <input type="text" placeholder='email ' className={styles.input} />
          <textarea placeholder='message' className={styles.textarea} rows="10" cols="30"></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
      
    </div>
  )    
}

export default Contact
