"use client";
import React, { useState } from 'react';
import styles from './page.module.css';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const session = useSession();
  const router  = useRouter();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    
    signIn("credentials", { email, password });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" className={styles.input} required />
        
        <div className={styles.passwordContainer}>
          <input
            type={showPassword ? "text" : "password"} // Toggle between password and text
            placeholder="Password"
            className={styles.input}
            required
          />
          <span
            className={styles.eyeIcon}
            onClick={() => setShowPassword(!showPassword)} // Toggle visibility on click
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        
        <button className={styles.button}>Login</button>
      </form>
      
      <button onClick={() => signIn("google")} className={styles.button}>
        <FaGoogle className={styles.icon} /> Login with Google
      </button>
      <button onClick={() => signIn("github")} className={styles.button}>
        <FaGithub className={styles.icon} /> Login with GitHub
      </button>
    </div>
  );
};

export default Login;
