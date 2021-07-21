import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function StaticRender({users}) {
  return (
    <div className={styles.container}>

      <main>
        <h1 className={styles.title}>
          Welcome to Static world!
        </h1>

        <ul>
          {users.map((user,index)=> (
            <li key = {index}>{user.name}</li>
          ))}
        </ul>
      </main>

    </div>
  )
}

export async function getStaticProps(){
  const res = await fetch("http://localhost:4001/workspaces");
  const users = await res.json();
  return{
    props:{
      users,
    },
  };
}