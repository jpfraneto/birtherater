import ProfessionalCard from '../ProfesionalCard';
import styles from './styles.module.css';

export default function ProfessionalsDisplay({ professionals }) {
  return (
    <div className={styles.profsDisplay}>
      {professionals.map(prof => (
        <ProfessionalCard professional={prof} />
      ))}
    </div>
  );
}
