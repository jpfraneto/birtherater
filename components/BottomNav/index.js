import styles from './styles.module.css';
import Link from 'next/link';

export default function BottomNav() {
  return (
    <div className={styles.bottomNav}>
      <Link href='/profesionales/nuevo'>
        <a className={styles.bottomText}>Agrega un Profesional </a>
      </Link>
    </div>
  );
}
