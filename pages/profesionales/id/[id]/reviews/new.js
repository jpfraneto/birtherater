import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';

export default function NewReview({}) {
  const router = useRouter();
  const [info, setInfo] = useState({});
  const handleSubmit = async e => {
    e.preventDefault();
    console.log('inside the handleSubmit, the info is: ', info);
    const res = await axios.put(
      `/api/profesionales/id/${router.query.id}/`,
      info
    );
    router.push(`/profesionales/id/${router.query.id}`);
  };
  const handleChange = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={e => handleSubmit(e)}>
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

      <button type='submit'>Send</button>
    </form>
  );
}
