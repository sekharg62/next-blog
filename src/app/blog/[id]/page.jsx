import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation';

async function getData(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      next: { revalidate: 10 },
    });
    if (!res.ok) {
      return notFound 
    }
    return await res.json();
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}


const Post = async({params})=> {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
           {data.title}
          </h1>
          <p className={styles.desc}>
            {data.body}
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=''
              width={40}
              height={40}
              className={styles.avatar} />
            <span className={styles.username}>Sekhar Ghosh</span>

          </div>

        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=''
            width={40}
            height={40}

            className={styles.image} />

        </div>

      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga tempore voluptas sapiente error odit cumque temporibus ullam porro mollitia omnis? Aspernatur qui dolorem accusantium. Excepturi veritatis mollitia illo distinctio possimus adipisci, autem quo rem hic dicta provident earum aliquid saepe quasi, dolor labore porro qui voluptatem! Id ut non hic delectus nesciunt rem harum excepturi unde minima earum ipsum <br /><br />error totam, inventore ad corporis maiores praesentium culpa repellendus, deleniti nam? Cum hic, sapiente facere labore asperiores quod temporibus autem ullam maiores illum quibusdam ducimus. Corrupti velit explicabo magnam vel reiciendis doloremque deleniti <br /><br />numquam sint eaque totam recusandae, molestiae facere laborum voluptate error. Autem, labore sit. Officiis numquam sit quasi assumenda quisquam ex molestias, rerum at aliquid tempora totam ipsam consectetur corrupti facere perferendis reiciendis deserunt voluptas harum natus neque. Deleniti est, blanditiis cumque mollitia modi eveniet iure voluptatem quis quasi incidunt odit excepturi quam cum assumenda molestiae. Neque voluptates quidem aliquid earum? Quibusdam, impedit sed, explicabo consequuntur nam saepe quas atque sint vel <br /><br />laudantium, voluptate dolorem numquam aut officiis voluptates illo. Fugit quaerat exercitationem repellendus nobis corporis voluptatem eveniet reiciendis doloribus, qui tempore nihil placeat ea rerum magni inventore velit natus rem, aspernatur deleniti provident illo unde dignissimos! Harum, nemo!
        </p>

      </div>

    </div>
  )
}

export default Post
