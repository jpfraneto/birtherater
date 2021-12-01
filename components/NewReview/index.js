import styles from './styles.module.css';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function NewReview({ reviews, setReviews }) {
  const [review, setReview] = useState({});
  const router = useRouter();
  const handleSubmit = async e => {
    e.preventDefault();
    console.log('inside the handleSubmit, the review is: ', review);
    const res = await axios.put(
      `/api/profesionales/id/${router.query.id}/`,
      review
    );
    console.log('antes', reviews);
    if (reviews) setReviews([review]);
    else setReviews([...reviews, review]);
  };
  const handleChange = e => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };
  return (
    <form className={styles.reviewForm} onSubmit={e => handleSubmit(e)}>
      <label>
        Comentario{' '}
        <input type='text' name='review' onChange={e => handleChange(e)} />
      </label>
      <br />
      <label>
        Nota de 1 a 7{' '}
        <input
          type='number'
          name='grade'
          min='0'
          max='7'
          onChange={e => handleChange(e)}
        />
      </label>
      <br />
      <label>
        ¿Quién eres?{' '}
        <input type='text' name='author' onChange={e => handleChange(e)} />
      </label>
      <br />

      <button type='submit'>Agregar</button>
    </form>
  );
}
