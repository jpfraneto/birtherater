import Link from 'next/link';
import Loader from '../../../../components/Loader';
import ProfesionalCard from '../../../../components/ProfesionalCard';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Profesional({}) {
  const [profesional, setProfesional] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath !== router.route) getProfesional();
  }, [router]);

  const getProfesional = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/profesionales/id/${router.query.id}`
      );
      const data = await response.json();
      setProfesional(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      {!profesional ? (
        <>
          <p>Loading!</p>
          <Loader />
        </>
      ) : (
        <>
          <ProfesionalCard profesional={profesional} />
        </>
      )}
    </main>
  );
}
