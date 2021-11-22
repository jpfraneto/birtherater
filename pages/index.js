import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

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
        <p>
          El objetivo de esta aplicación es poder tener un espacio donde se
          encuentren personas que necesitan compartir su experiencia con
          respecto al parto y a las personas que las ayudaron en ese proceso y a
          las personas que tienen un bebé en camino y quieren informarse acerca
          de el grupo de personas que las van a ayudar.
        </p>
        <p>
          Nace de una experiencia muy difícil que tuvimos en el parto de nuestra
          hija, y de lo bueno que hubiera sido para nosotros contar con el
          relato y experiencia de otras personas para poder informarnos y tomar
          una buena decisión en cuanto a con quién trabajar en este momento tan
          crucial para la vida de nuestra hija.
        </p>
        <p>
          Hoy en día se le entrega tan poca importancia a la llegada de nuevos
          humanos, y creo firmemente que esto es lo que va haciendo que desde
          que llegamos nuestra vida se desarrolle desde un espacio alejado de la
          conciencia. Creo que si es que podemos ayudar a los que vienen
          después, nos nutrimos, y crecemos en el camino. Una persona se tuvo
          que equivocar para aprender una determinada lección, y a partir de eso
          después se va construyendo el conocimiento que nos permite avanzar.
        </p>
        <p>
          Queremos generar un encuentro, un match, entre personas que quieren
          ayudar y personas que quieren ser ayudadas.
        </p>
      </main>
    </div>
  );
}
