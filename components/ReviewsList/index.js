import styles from './styles.module.css';
import ReviewCard from '../ReviewCard';

export default function ReviewsList({ reviews }) {
  return (
    <div className={styles.reviewsList}>
      <p>
        <strong>Número de Opiniones: </strong> {reviews.length}
      </p>
      <p>
        <strong>Promedio Opiniones: </strong>
        {(
          reviews.reduce((acc, review) => acc + Number(review.grade), 0) /
          reviews.length
        ).toFixed(2)}
      </p>
      {reviews.reverse().map((review, index) => {
        return (
          <p>
            <ReviewCard key={index} review={review} />
          </p>
        );
      })}
    </div>
  );
}
