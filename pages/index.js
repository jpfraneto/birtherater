import useSWR from 'swr';
import Link from 'next/link';
import ProfessionalsDisplay from '../components/ProfessionalsDisplay';
import Loader from '../components/Loader';
import { useState } from 'react';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Profesionals({ profesionales }) {
  const [name, setName] = useState('');
  const { data, error } = useSWR('http://localhost:3000/api/profesionales');
  if (error) return <div>Failed to load</div>;
  if (!data) return <Loader />;

  const searchProfessional = () => {};

  return (
    <main>
      <div className='inputsDiv'>
        <input
          onChange={e => setName(e.target.value)}
          className='searchInput'
          type='text'
          placeholder='Nombre profesional'
        />
        <input
          className='submitInput'
          type='submit'
          value='Buscar'
          onClick={searchProfessional}
        />
      </div>

      <ProfessionalsDisplay professionals={data.message} />
    </main>
  );
}
