import Loader from '../../components/Loader';
import NewProf from '../../components/NewProf';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function NewProfessional({}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <>
      {!loading ? (
        <NewProf router={router} setLoading={setLoading} />
      ) : (
        <>
          <Loader />
          <p>Agregando a la base de datos</p>
        </>
      )}
    </>
  );
}
