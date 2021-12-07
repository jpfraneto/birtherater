import styles from './styles.module.css';

export default function Modal({ content, setShowModal }) {
  return (
    <div className={styles.modal}>
      <span onClick={() => setShowModal(false)}>❌ </span>
      {content}
    </div>
  );
}
