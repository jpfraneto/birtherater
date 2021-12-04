import styles from './styles.module.css';
import Button from '../Button';
import ReviewsList from '../ReviewsList';
import NewReview from '../NewReview';
import { useState } from 'react';

export default function ProfesionalProfile({ profesional }) {
  const [newReview, setNewReview] = useState(false);
  const [reviews, setReviews] = useState(profesional.reviews);
  return (
    <div className={styles.profesionalProfile}>
      <h2 className={styles.profName}>{profesional.name}</h2>
      <p className={styles.profSubtitle}>
        {profesional.type} /
        {profesional.center &&
          profesional.comuna &&
          ` ${profesional.center}, ${profesional.comuna
            .charAt(0)
            .toUpperCase()}${profesional.comuna.slice(1)}`}
      </p>
      {reviews && <ReviewsList reviews={reviews} />}

      <button
        className={styles.newReviewBtn}
        onClick={() => setNewReview(!newReview)}
      >
        Escribir nuevo review
      </button>

      {newReview && <NewReview reviews={reviews} setReviews={setReviews} />}
      <br />
      <Button link='/' text='Atrás' />
    </div>
  );
}
