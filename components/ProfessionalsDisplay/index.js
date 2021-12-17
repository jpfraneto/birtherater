import ProfessionalCard from '../ProfesionalCard';
import styles from './styles.module.css';

export default function ProfessionalsDisplay({
  professionals,
  setShowProfessional,
}) {
  return (
    <div className={styles.profsDisplay}>
      {professionals.slice(0, 14).map(prof => (
        <ProfessionalCard
          setShowProfessional={setShowProfessional}
          key={prof._id}
          professional={prof}
        />
      ))}
    </div>
  );
}
