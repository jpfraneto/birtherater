import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function NewProfessional({}) {
  const [content, setContent] = useState({});
  const router = useRouter();
  const submitForm = async e => {
    e.preventDefault();
    if (!content.type || !content.name) return alert('please fill the form');
    try {
      const response = await axios.post('/api/profesionales/nuevo', content);
      router.push('/profesionales');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = e => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };
  return (
    <main>
      <p>This is the new profesional route</p>
      <p>El nombre es: {`${content.name}`}</p>
      <p>La especialidad es: {`${content.type}`} </p>
      <form onSubmit={e => submitForm(e)}>
        <input
          type='text'
          name='name'
          value={content.name}
          onChange={e => handleChange(e)}
        />
        <select name='type' onChange={e => handleChange(e)}>
          <option value=''>Selecciona Tipo de Profesional</option>
          <option value='ginecologo'>Ginecolog@</option>
          <option value='matron'>Matron@</option>
        </select>

        <button type='submit'>Add to DB</button>
      </form>
      <Link href='/profesionales'>
        <a>Ir al directorio de profesionales</a>
      </Link>
    </main>
  );
}
