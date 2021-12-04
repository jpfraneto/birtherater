import styles from './styles.module.css';
import Link from 'next/link';

export default function ProfessionalCard({ professional }) {
  console.log(professional);
  if (professional.reviews) {
    const getAverage =
      professional.reviews.reduce((x, y) => x + +y.grade, 0) /
      professional.reviews.length;
  }
  return (
    <Link href={`/profesionales/id/${professional._id}`}>
      <div className={styles.profCardDiv}>
        <span>{getAverage && getAverage.toFixed(2)}</span>
        <p className={styles.profName}>{professional.name}</p>
        <p className={styles.profType}>{professional.type}</p>
        <p className={styles.profRegion}>{professional.region}</p>
      </div>
    </Link>
  );
}
