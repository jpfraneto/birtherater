import styles from './styles.module.css';

export default function AboutElement({ element }) {
  return (
    <div className={styles.outerDiv}>
      <div className={styles.iconDiv}>
        <img
          src={element.image}
          className={styles.imageStyle}
          alt='Baby doing her thing'
        />
      </div>
      <div className={styles.containerDiv}>
        <h4>{element.title}</h4>
        <p>{element.text}</p>
      </div>
    </div>
  );
}
