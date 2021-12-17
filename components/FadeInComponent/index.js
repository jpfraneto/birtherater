import styles from './styles.module.css';

export default function FadeInComponent() {
  const keyDownHandler = e => {
    alert(e.code);
  };
  return (
    <div
      className={styles.mainDiv}
      tabIndex='0'
      onKeyDown={keyDownHandler}
    ></div>
  );
}
