import useSWR from 'swr';
import Search from '../components/Search';
import ProfessionalsDisplay from '../components/ProfessionalsDisplay';
import Loader from '../components/Loader';
import { useState } from 'react';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Profesionals({}) {
  const [name, setName] = useState('');
  const [profesionales, setProfesionales] = useState(null);
  const { data, error } = useSWR('http://localhost:3000/api/profesionales');
  if (error) return <div>Failed to load</div>;
  if (!data) return <Loader />;

  return (
    <main>
      <h1>Birtherater</h1>
      <h4>
        Evalúa y revisa evaluaciones de quien va a estar encargado de tu parto
      </h4>
      <Search
        setProfesionales={setProfesionales}
        profesionales={profesionales}
        data={data}
      />

      <ProfessionalsDisplay
        professionals={profesionales ? profesionales : data.message}
      />
    </main>
  );
}
