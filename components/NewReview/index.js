import styles from './styles.module.css';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function NewReview({
  profName,
  reviews,
  setReviews,
  setNewReview,
}) {
  const [review, setReview] = useState({});
  const [sent, setSent] = useState('');
  const router = useRouter();
  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.put(
      `/api/profesionales/id/${router.query.id}/`,
      review
    );
    if (!reviews) setReviews([review]);
    else setReviews([...reviews, review]);
    setSent('El comentario fue agregado!');
    setReview({ author: '', review: '', grade: '' });
  };
  const handleChange = e => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };
  return (
    <>
      {sent ? (
        <p>{sent}</p>
      ) : (
        <div className={styles.reviewFormWrapper}>
          <p>{`Agrega un nuevo comentario a ${profName}`}</p>
          <form className={styles.reviewForm} onSubmit={e => handleSubmit(e)}>
            <label>
              Comentario{' '}
              <textarea
                type='text'
                value={review.review}
                name='review'
                onChange={e => handleChange(e)}
              />
            </label>
            <br />
            <label>
              Nota de 1 a 7{' '}
              <input
                type='number'
                name='grade'
                value={review.grade}
                min='0'
                max='7'
                onChange={e => handleChange(e)}
              />
            </label>
            <br />
            <label>
              ¿Quién eres?{' '}
              <input
                type='text'
                value={review.author}
                name='author'
                onChange={e => handleChange(e)}
              />
            </label>
            <br />
            <div className={styles.newBtns}>
              <button
                type='button'
                onClick={() => {
                  setNewReview(false);
                }}
              >
                Cancelar
              </button>
              <button type='submit'>Agregar</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
