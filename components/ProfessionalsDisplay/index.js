import ProfessionalCard from '../ProfesionalCard';
import styles from './styles.module.css';

export default function ProfessionalsDisplay({ professionals }) {
  return (
    <div className={styles.profsDisplay}>
      {professionals.slice(0, 14).map(prof => (
        <ProfessionalCard key={prof._id} professional={prof} />
      ))}
    </div>
  );
}
