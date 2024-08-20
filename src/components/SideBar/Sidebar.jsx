import React, { useState } from 'react';
import styles from './page.module.css';
import { FaHome, FaUser, FaCog, FaBell, FaEnvelope, FaChartPie, FaFileAlt, FaSignOutAlt, FaShoppingCart } from 'react-icons/fa';
import { useSession } from 'next-auth/react';

const navItems = [
  { name: 'Home', icon: <FaHome />, link: '/dashboard/home' },
  { name: 'Profile', icon: <FaUser />, link: '/dashboard/profile' },
  { name: 'Settings', icon: <FaCog />, link: '/dashboard/settings' },
  { name: 'Notifications', icon: <FaBell />, link: '/dashboard/notifications' },
  { name: 'Messages', icon: <FaEnvelope />, link: '/dashboard/messages' },
  { name: 'Analytics', icon: <FaChartPie />, link: '/dashboard/analytics' },
  { name: 'Reports', icon: <FaFileAlt />, link: '/dashboard/reports' },
  { name: 'Shop', icon: <FaShoppingCart />, link: '/dashboard/shop' },
  { name: 'Logout', icon: <FaSignOutAlt />, link: '/dashboard/logout' },
];

const Sidebar = () => {
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
        {navItems.map((item, index) => (
          <a href={item.link} key={index} className={styles.navItem}>
            {item.icon}
            <span className={styles.span}>{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
