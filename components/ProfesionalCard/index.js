import styles from './styles.module.css';
import Button from '../Button';

export default function ProfesionalCard({ profesional }) {
  return (
    <div className={styles.profesionalCard}>
      <img
        className={styles.profesionalImage}
        src='https://s3.sa-east-1.amazonaws.com/doctoralia.cl/doctor/2bf1cd/2bf1cd19b00ad6fca3aa0edc6496586c_large.jpg'
      />
      <div className={styles.profesionalInfo}>
        <p>{profesional.name}</p>
        <p>{profesional.type}</p>
        <p>Opiniones: ⭐️⭐️⭐️⭐️⭐️</p>
        <Button
          link={`/profesionales/id/${profesional._id}/reviews/new`}
          text='Escribir nuevo comentario'
        />
      </div>
    </div>
  );
}
