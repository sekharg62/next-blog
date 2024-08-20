"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
];

const Navbar = () => {
  const session = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>MY-APP</Link>
      <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button
            onClick={() => signOut()}
            className={styles.logout}
          >
            Logout
          </button>
        )}
      </div>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        &#9776;
      </div>
    </div>
  );
};

export default Navbar;

