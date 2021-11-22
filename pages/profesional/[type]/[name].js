import Link from 'next/link';
import Busqueda from '../../../components/Busqueda';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const doctores = [
  {
    slug: 'jaime-sepulveda',
    edad: '48',
    type: 'doctor',
    nombre: 'Jaime Sepulveda',
    centros: ['Cerro Navia', 'Pudahuel'],
    reviews: {
      Positivos: 40,
      Negativos: 60,
    },
  },
  {
    slug: 'catalina-bley',
    edad: '32',
    type: 'doctor',
    nombre: 'Catalina Bley',
    centros: ['Clinica Las Condes', 'Clinica Alemana'],
    reviews: {
      Positivos: 88,
      Negativos: 12,
    },
  },
  {
    slug: 'emiliano-soto',
    edad: '44',
    type: 'doctor',
    nombre: 'Emiliano Soto',
    centros: ['Clinica Alemana'],
    reviews: {
      Positivos: 92,
      Negativos: 8,
    },
  },
];

const findDoctor = slug => {
  let chosenOne;
  doctores.forEach(doctor => {
    if (slug === doctor.slug) {
      chosenOne = doctor;
    }
  });
  return chosenOne;
};

export default function Doctor() {
  const [doctor, setDoctor] = useState(null);
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    const thisDoctor = findDoctor(router.query.name);
    if (thisDoctor) setDoctor(thisDoctor);
  }, [router.isReady]);
  return (
    <main
      style={{
        backgroundColor: '#666  ',
        height: '300px',
        border: '10px solid yellow',
      }}
    >
      Esta es la página para un particular {router.query.profesional}
      {doctor ? (
        <ul>
          <li>Name: {doctor.nombre}</li>
          <li>Edad: {doctor.edad} </li>
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
          <Busqueda />
        </div>
      )}
      <Link href='/'>
        <a>Atrás </a>
      </Link>
    </main>
  );
}
