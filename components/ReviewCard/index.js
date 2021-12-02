import styles from './styles.module.css';

export default function ReviewCard(review) {
  return (
    <div className={styles.reviewCard}>
      <strong>
        Nota: {review.review.grade} - Autor: {review.review.author}
      </strong>
      <p></p>
      <div className={styles.reviewText}>
        {decodeURIComponent(review.review.review)}
      </div>
    </div>
  );
}
