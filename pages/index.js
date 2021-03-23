import Head from 'next/head'
import styles from '../styles/Home.module.css'
import App from '../pages/app.js'

export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
          <title> Manny Front-end</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <div className={styles.inner}>
        

        <App />
       </div>

    </div>
  )
}
