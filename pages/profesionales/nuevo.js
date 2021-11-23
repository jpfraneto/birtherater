import Link from 'next/link';
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function NewProfessional({}) {
  const [name, setName] = useState('');
  const [profType, setProfType] = useState('');
  const router = useRouter();
  const submitForm = async e => {
    e.preventDefault();
    if (!profType || !name) return alert('please fill the form');
    try {
      await addDoc(collection(db, `${profType}`), {
        name,
        yes: '0%',
        no: '0%',
        comentarios: 0,
        region: '',
        location: '',
        edad: 0,
        profSlug: name.toLowerCase().replace(' ', '-'),
      });

      console.log('the document was written in the db');
      router.push('/profesionales');
    } catch (error) {
      console.log(error);
      console.log('there was an error saving the document in the db');
    }
  };
  return (
    <main>
      <p>This is the new profesional route</p>
      <p>El nombre es: {`${name}`}</p>
      <p>La especialidad es: {`${profType}`} </p>
      <form onSubmit={e => submitForm(e)}>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <select name='' onChange={e => setProfType(e.target.value)}>
          <option value=''>Selecciona Tipo de Profesional</option>
          <option value='ginecolog@s'>Ginecologa</option>
          <option value='matron@s'>Matrona</option>
        </select>

        <button type='submit'>Add to DB</button>
      </form>
      <Link href='/profesionales'>
        <a>Ir al directorio de profesionales</a>
      </Link>
    </main>
  );
}
