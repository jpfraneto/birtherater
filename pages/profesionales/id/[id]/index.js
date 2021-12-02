import Loader from '../../../../components/Loader';
import { useRouter } from 'next/router';
import { useUser } from '../../../../src/data/useUser';
import ProfesionalProfile from '../../../../components/ProfesionalProfile';

export default function Profesional({}) {
  const router = useRouter();
  const { profesional, isLoading, isError } = useUser(router.query.id);
  if (isLoading) return <Loader />;
  if (isError) return <p>Something went wrong...</p>;
  return <ProfesionalProfile profesional={profesional.message} />;
}
