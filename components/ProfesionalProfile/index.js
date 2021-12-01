import styles from './styles.module.css';
import Button from '../Button';
import ReviewsList from '../ReviewsList';
import NewReview from '../NewReview';
import { useState } from 'react';

export default function ProfesionalProfile({ profesional }) {
  const [newReview, setNewReview] = useState(false);
  const [reviews, setReviews] = useState(profesional.reviews);
  return (
    <div className={styles.profesionalCard}>
      <img
        className={styles.profesionalImage}
        src='https://s3.sa-east-1.amazonaws.com/doctoralia.cl/doctor/2bf1cd/2bf1cd19b00ad6fca3aa0edc6496586c_large.jpg'
      />
      <div className={styles.profesionalInfo}>
        <h3>{profesional.name}</h3>
        <p>
          {profesional.type} / {profesional.region}
        </p>
        {reviews && <ReviewsList reviews={reviews} />}

        <button onClick={() => setNewReview(!newReview)}>
          Escribir nuevo review
        </button>

        {newReview && <NewReview reviews={reviews} setReviews={setReviews} />}
        <br />
        <Button link='/' text='Atrás' />
      </div>
    </div>
  );
}
