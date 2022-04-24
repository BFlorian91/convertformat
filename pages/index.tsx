import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Uploader from '../components/upload/uploader'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Convert your CBZ or CBR file</title>
        <meta name="description" content="Generate a CBZ or CBR file" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          F.B.Convert
        </h1>

        <p className={styles.description}>
          Get started to upload{' '}
          <code className={styles.code}>your file</code>
        </p>

        <div className={styles.grid}>
          <Uploader />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
