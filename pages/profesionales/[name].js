import Link from 'next/link';
import Search from '../../components/Search';
import { getDocs, query, collectionGroup } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import initialDetails from '../../src/data/initialDetails';

export default function Profesional({ props }) {
  const [profesional, setProfesional] = useState(null);
  const router = useRouter();

  return (
    <main
      style={{
        backgroundColor: '#666  ',
        height: '300px',
        border: '10px solid yellow',
      }}
    >
      Esta es la página para un particular profesional
      {profesional ? (
        <ul>
          <li>Name: {profesional.nombre}</li>
          <li>Edad: {profesional.edad} </li>
          <li>Centros Donde Trabaja:</li>
          <ul>
            <li>La pintana</li>
            <li>Cerro Navia</li>
          </ul>
          <li>Aloja</li>
          <li>Comentarios: 60% NO, 40% SI</li>
        </ul>
      ) : (
        <div>
          <p>Ese no existe! Puedes buscar otro acá:</p>
          <Search details={initialDetails} />
        </div>
      )}
      <Link href='/'>
        <a>Atrás </a>
      </Link>
    </main>
  );
}
