import Head from 'next/head';
import Search from '../components/Search';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import initialDetails from '../src/data/initialDetails';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Partoralia</title>
        <meta
          name='description'
          content='Conoce el equipo médico que acompañará tu parto'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Search details={initialDetails} />
      </main>
    </div>
  );
}
