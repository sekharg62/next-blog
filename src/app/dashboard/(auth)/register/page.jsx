"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const Register = () => {
  const [err, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    console.log("Name:",name);
    const email = e.target[1].value;
    console.log("email:",email);
    const password = e.target[2].value;
    console.log("pass:",password); 

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name, email, password,
        })
      });

      if (res.status === 201) {
        router.push("/dashboard/login?success=Account has been created");
      } 
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder="username" className={styles.input} required />
        <input type="email" placeholder="email" className={styles.input} required />
        <input type="password" placeholder="password" className={styles.input} required />
        <button className={styles.button}>Register</button>
      </form>
      {err && <span>Something went wrong</span>}
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  );
}

export default Register;
