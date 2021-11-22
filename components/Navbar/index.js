import styles from './styles.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href='/'>
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href='/doctorxs'>
            <a>Doctorxs</a>
          </Link>
        </li>
        <li>
          <Link href='/matronxs'>
            <a>Matronxs</a>
          </Link>
        </li>
        <li>
          <Link href='/especificaciones'>
            <a>Especificaciones</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
