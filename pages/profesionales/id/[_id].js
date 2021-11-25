import Link from 'next/link';
import Loader from '../../../components/Loader';
import ProfesionalCard from '../../../components/ProfesionalCard';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Profesional({}) {
  const [profesional, setProfesional] = useState(null);
  const router = useRouter();

  useEffect(() => {
    console.log('inside the useeffect');
    if (router.asPath !== router.route) getProfesional();
  }, [router]);

  const getProfesional = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/profesionales/id/${router.query._id}`
      );
      const data = await response.json();
      setProfesional(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main
      style={{
        backgroundColor: '#666  ',
        height: '300px',
        border: '10px solid yellow',
      }}
    >
      {!profesional ? (
        <>
          <p>Loading!</p>
          <Loader />
        </>
      ) : (
        <ProfesionalCard profesional={profesional} />
      )}
    </main>
  );
}
