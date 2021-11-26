import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';

export default function NewReview({}) {
  const router = useRouter();
  const [info, setInfo] = useState({});
  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.put(
      `/api/profesionales/id/${router.query.id}/`,
      info
    );
    console.log('the response is: ', res);
    console.log(res.data);
  };
  const handleChange = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label>
        Comentario
        <input type='text' name='review' onChange={e => handleChange(e)} />
      </label>
      <br />
      <label>
        Nota de 1 a 7
        <input
          type='number'
          name='nota'
          min='0'
          max='7'
          onChange={e => handleChange(e)}
        />
      </label>
      <br />

      <button type='submit'>Send</button>
    </form>
  );
}
