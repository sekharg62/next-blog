"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { FaHome, FaUser, FaCog, FaBell, FaEnvelope, FaChartPie, FaFileAlt, FaSignOutAlt, FaShoppingCart } from 'react-icons/fa';
import { useSession, signOut } from 'next-auth/react';
import Loading from '../Loading/Loading';

const navItems = [
  { name: 'Home', icon: <FaHome />, link: '/' },
  { name: 'Portfolio', icon: <FaUser />, link: '/portfolio' },
  { name: 'Blog', icon: <FaCog />, link: '/blog' },
  { name: 'About', icon: <FaBell />, link: '/about' },
  { name: 'Contact', icon: <FaEnvelope />, link: '/contact' },
  { name: 'Dashboard', icon: <FaChartPie />, link: '/dashboard' },
  { name: 'Reports', icon: <FaFileAlt />, link: '/dashboard/reports' },
  { name: 'Shop', icon: <FaShoppingCart />, link: '/dashboard/shop' },
];

const Sidebar = ({ username }) => {
  const { status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  if (status === "loading") {
    return <Loading />;
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        &#9776;
      </div>

      <div className={`${styles.sidebar} ${menuOpen ? styles.open : ""}`}>
        <p>Welcome, {username}</p>
        {navItems.map((item, index) => (
          <Link href={item.link} key={index} className={styles.navItem}>
            {item.icon}
            <span className={styles.span}>{item.name}</span>
          </Link>
        ))}
        <button onClick={() => signOut()} className={styles.logout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
