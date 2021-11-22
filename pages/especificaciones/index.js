import Link from 'next/link';
import styles from './styles.module.css';

export default function Especificaciones() {
  return (
    <main className={styles.main}>
      <p>Esta es la página donde van a estar las especificaciones</p>
      <p>
        A la hora de empezar a idear este proyecto se me ocurren las siguientes
        ideas:{' '}
      </p>
      <ul>
        <li>
          Que en el inicio exista un espacio donde buscar a profesional por
          nombre, y que se pueda seleccionar qué tipo de profesional es el que
          estoy buscando (doctor o matrona).
        </li>
        <li>
          Que se pueda buscar por región geográfica y centro asistencial, para
          que las personas sepan qué es lo que hay disponible en su área de
          elección.
        </li>
        <li>
          Es clave que exista flexibilidad en cuanto a las capacidades de las
          personas de agregar nueva información. Por ejemplo, yo es imposible
          que busque información relacionada a un pequeño pueblo en la séptima
          región, pero sería bueno que las personas puedieran ser quienes
          agregan esta información y quedara todo bien indexado en la base de
          datos. Desde ahí se va construyendo el conocimiento y éxito de este
          espacio, ya que para que sea de abajo hacia arriba tiene que tener la
          posibilidad de que las personas sean quienes agregan su información.
        </li>
        <li>
          Que las personas que escriben una reseña contesten la simple pregunta
          (en vez de catalogar de 1 a 5 estrellas). ¿Recomendarías a este
          profesional para que atienda el nacimiento de un nuevo ser humano? En
          el supuesto que vas a tener otro hijo, lo tendrías con este
          profesional? Creo firmemente que la respuesta a esta pregunta es más
          representativa que el espectro de 'estrellas' de catalogación. Es
          mucho más certero.
        </li>
        <li>
          No creo necesario que se ponga la posibilidad de contactar al
          profesional directamente, lo que si creo es que es bueno que cada
          profesional tenga un perfil y en ese perfil aparezca la información de
          personas que han compartido su experiencia con él. Es fácil de saber
          donde trabajan y a partir de ello contactarlos, no creo que esto sea
          un problema ni que sea necesario calentarme la cabeza agregandolo. Lo
          importante es que las personas puedan agregar reseñas de los distintos
          profesionales. Esa es la clave de este espacio.
        </li>
      </ul>
      <Link href='/'>
        <a>Atrás</a>
      </Link>
    </main>
  );
}
