import Link from 'next/link';
import styles from './styles.module.css';

export default function Especificaciones() {
  return (
    <main className={styles.main}>
      <p>Esta es la página donde van a estar las especificaciones</p>
      <p>
        A la hora de empezar a idear este proyecto se me ocurren las siguientes
        ideas:
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
      <p>
        El objetivo de esta aplicación es poder tener un espacio donde se
        encuentren personas que necesitan compartir su experiencia con respecto
        al parto y a las personas que las ayudaron en ese proceso y a las
        personas que tienen un bebé en camino y quieren informarse acerca de el
        grupo de personas que las van a ayudar.
      </p>
      <p>
        Nace de una experiencia muy difícil que tuvimos en el parto de nuestra
        hija, y de lo bueno que hubiera sido para nosotros contar con el relato
        y experiencia de otras personas para poder informarnos y tomar una buena
        decisión en cuanto a con quién trabajar en este momento tan crucial para
        la vida de nuestra hija.
      </p>
      <p>
        Hoy en día se le entrega tan poca importancia a la llegada de nuevos
        humanos, y creo firmemente que esto es lo que va haciendo que desde que
        llegamos nuestra vida se desarrolle desde un espacio alejado de la
        conciencia. Creo que si es que podemos ayudar a los que vienen después,
        nos nutrimos, y crecemos en el camino. Una persona se tuvo que equivocar
        para aprender una determinada lección, y a partir de eso después se va
        construyendo el conocimiento que nos permite avanzar.
      </p>
      <p>
        Queremos generar un encuentro, un match, entre personas que quieren
        ayudar y personas que quieren ser ayudadas.
      </p>
      <Link href='/'>
        <a>Atrás</a>
      </Link>
    </main>
  );
}
