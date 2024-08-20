// components/Loading.js
import React from 'react';
import styles from './page.module.css'


const Loading = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
      <p className={styles.loadingText}>Loading...</p>
    </div>
  );
};

export default Loading;
