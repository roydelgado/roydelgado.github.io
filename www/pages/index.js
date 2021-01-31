import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roy Delgado 👾</title>
        <link rel="icon" href="/static/favicon.ico" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto&display=swap" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Roy Delgado
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by&nbsp;
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
