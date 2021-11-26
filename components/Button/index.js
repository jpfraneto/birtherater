import styles from './styles.module.css';
import Link from 'next/link';

export default function Button({ link, text }) {
  console.log(link, text);
  return (
    <div className={styles.btn}>
      <Link href={link}>
        <a>{text}</a>
      </Link>
    </div>
  );
}
