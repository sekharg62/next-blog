"use client";

import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/posts",{
      next:{revalidate:10},
    });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    console.log("res:",res.title)
    return await res.json();
  } catch (error) {
    console.error("Error is:", error);
    return [];
  }
}

const Blog =async () => {
  
  
      const data = await getData();
  

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image src={item.img} alt="gg" width={400} height={250} className={styles.img} />
            {item}
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
