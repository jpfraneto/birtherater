import styles from './styles.module.css';
import Link from 'next/link';

export default function ProfessionalCard({ professional }) {
  return (
    <Link href={`/profesionales/id/${professional._id}`}>
      <div className={styles.profCardDiv}>
        <img />
        <p className={styles.profName}>{professional.name}</p>
        <p className={styles.profType}>{professional.type}</p>
        <p className={styles.profRegion}>{professional.region}</p>
      </div>
    </Link>
  );
}
