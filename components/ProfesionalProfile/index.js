import styles from './styles.module.css';
import Link from 'next/link';
import Button from '../Button';
import ReviewsList from '../ReviewsList';
import { AiFillEdit } from 'react-icons/ai';
import NewReview from '../NewReview';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function ProfesionalProfile({ profesional }) {
  const router = useRouter();
  const [newReview, setNewReview] = useState(false);
  const [reviews, setReviews] = useState(profesional.reviews);
  return (
    <div className={styles.profesionalProfile}>
      <div className={styles.profTitle}>
        <h2 className={styles.profName}>{profesional.name}</h2>
        <Link href={`/profesionales/id/${router.query.id}/edit`}>
          <a>
            <AiFillEdit />
          </a>
        </Link>
      </div>

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

      {newReview && (
        <NewReview
          profName={profesional.name}
          reviews={reviews}
          setNewReview={setNewReview}
          setReviews={setReviews}
        />
      )}
      <br />

      <Button link='/' text='Atrás' />
    </div>
  );
}
