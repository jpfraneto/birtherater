import styles from './styles.module.css';
import Link from 'next/link';
import ReviewsList from '../ReviewsList';
import { AiFillEdit } from 'react-icons/ai';
import NewReview from '../NewReview';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProfesionalProfile({
  profesional,
  setShowProfessional,
}) {
  const router = useRouter();
  const [newReview, setNewReview] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState(profesional.reviews);
  useEffect(() => {}, []);
  const keyDownHandler = event => {
    if (event.keyCode === 27) {
      setShowProfessional(null);
    }
  };
  return (
    <div
      onKeyDown={keyDownHandler}
      tabIndex='0'
      className={styles.profesionalProfile}
    >
      <span
        onClick={() => {
          setShowProfessional(null);
        }}
        className={styles.btnClose}
      >
        ❌ Cerrar
      </span>
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
      <span
        className={styles.btnCloseBottom}
        onClick={() => {
          setShowProfessional(null);
        }}
      >
        ❌ Cerrar
      </span>
    </div>
  );
}
