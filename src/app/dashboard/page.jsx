"use client"
import Image from 'next/image';
import styles from './page.module.css'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import useSWR from 'swr';
import Sidebar from '@/components/SideBar/Sidebar';
import Loading from '@/components/Loading/Loading';

const Dashboard = () => {
  const session = useSession()
  const router = useRouter()

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)
  console.log("data:", data)

  if (session.status === "loading") {
    return <p>Loading....</p>
  }

  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login')
    return null; // Ensure nothing is rendered while redirecting
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name // Corrected this line
        })
      });
      mutate()
    } catch (error) {
      console.log('ERROR:', error);
    }
  }

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate() // Update the data after deletion to reflect the changes
    } catch (error) {
      console.log(error)
    }
  }

  if (session.status === 'authenticated') {
    return (
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <Sidebar />
        </div>

        <div className={styles.rightContent}>

          <div className={styles.posts}>
            {isLoading ? <Loading/> : (
              data && data.length > 0 ? (
                data.map(post => (
                  <div key={post._id} className={styles.post}>
                    <div className={styles.imgContainer}>
                      <Image src={post.img} alt={post.title} width={200} height={200} className={styles.contentImg} />
                    </div>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <span className={styles.delete} onClick={() => handleDelete(post._id)}>X</span>
                  </div>
                ))
              ) : (
                <p>You have no posts.</p>
              )
            )}
          </div>
          <div className={styles.formContent}>
            <form className={styles.new} onSubmit={handleSubmit}  >
              <h1>Add New Post</h1>
              <input type="text" placeholder="Enter your post title..." className={styles.input} />
              <input type="text" placeholder="Enter your post description..." className={styles.input} />

              <input type="text" placeholder="Enter your post image url..." className={styles.input} />
              <textarea placeholder='Enter your post content...' className={styles.textarea} cols={30} rows={15}></textarea>
              <button className={styles.button}>Send</button>
            </form>
          </div>

        </div>
      </div>
    );
  }

  return null; // Default return, in case no status matches
}

export default Dashboard;
