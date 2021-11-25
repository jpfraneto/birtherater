import Link from 'next/link';
import { useState } from 'react';

export default function Profesionals({ profesionales }) {
  const [name, setName] = useState('');
  return (
    <main>
      <Link className='btn-blue' href='/profesionales/nuevo'>
        <button>Agregar nuevo profesional</button>
      </Link>
      <br />
      <input
        onChange={e => setName(e.target.value)}
        className='searchInput'
        type='text'
        placeholder='Nombre profesional'
      />
      <ul>
        {profesionales &&
          profesionales
            .filter(x => x.name.toLowerCase().includes(name.toLowerCase()))
            .map(prof => (
              <li key={prof._id}>
                <Link href={`/profesionales/id/${prof._id}`}>{prof.name}</Link>
              </li>
            ))}
      </ul>
    </main>
  );
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/profesionales');
  let data = await response.json();
  return {
    props: {
      profesionales: data['message'],
    },
  };
}
