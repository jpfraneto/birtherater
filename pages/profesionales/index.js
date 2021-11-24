import Link from 'next/link';
import { doc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useState } from 'react';

export default function Profesional({}) {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [profesionales, setProfesionales] = useState([]);
  const [profType, setProfType] = useState('');
  const changeProfType = async e => {
    setLoading(true);
    setProfType(e.target.value);
    setProfesionales([]);
    const querySnapshot = await getDocs(collection(db, e.target.value));
    let profs = [];
    querySnapshot.forEach(doc => {
      profs.push(doc.data());
    });
    setProfesionales(profs);
    setLoading(false);
  };
  return (
    <main>
      {profType && <p>Tipo de Profesional: {`${profType}`}</p>}
      <form onSubmit={e => submitForm(e)}>
        <select name='' onChange={e => changeProfType(e)}>
          <option value=''>Selecciona Tipo de Profesional</option>
          <option value='ginecolog@s'>Ginecologa</option>
          <option value='matron@s'>Matrona</option>
        </select>
      </form>
      <Link className='btn-blue' href='/profesionales/nuevo'>
        <button>Agregar nuevo</button>
      </Link>
      {!loading && (
        <ul>
          {profesionales.map(profesional => (
            <Link
              key={profesional.profSlug}
              href={`/profesionales/${profType}/${profesional.profSlug}`}
            >
              <a>{profesional.name}</a>
            </Link>
          ))}
        </ul>
      )}
    </main>
  );
}
