import styles from './styles.module.css';

export default function ProfesionalCard({ profesional }) {
  return (
    <div className={styles.profesionalCard}>
      <img src='https://s3.sa-east-1.amazonaws.com/doctoralia.cl/doctor/2bf1cd/2bf1cd19b00ad6fca3aa0edc6496586c_large.jpg' />
      <div>
        <p>{profesional.name}</p>
        <p>{profesional.type}</p>
        <p>Opiniones: ⭐️⭐️⭐️⭐️⭐️</p>
      </div>
    </div>
  );
}
