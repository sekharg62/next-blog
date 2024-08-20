import React from 'react';
import styles from './page.module.css';
import { FaHome, FaUser, FaCog, FaBell, FaEnvelope, FaChartPie, FaFileAlt, FaSignOutAlt, FaShoppingCart } from 'react-icons/fa';

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
  return (
    <div className={styles.sidebar}>
      {navItems.map((item, index) => (
        <a href={item.link} key={index} className={styles.nav-item}>
          {item.icon}
          <span className={styles.span}>{item.name}</span>
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
