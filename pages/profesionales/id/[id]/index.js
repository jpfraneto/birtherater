import Link from 'next/link';
import Loader from '../../../../components/Loader';
import ProfesionalCard from '../../../../components/ProfesionalCard';
import { useRouter } from 'next/router';
import { useUser } from '../../../../src/data/useUser';

export default function Profesional({}) {
  const router = useRouter();
  const { profesional, isLoading, isError } = useUser(router.query.id);
  if (isLoading) return <Loader />;
  if (isError) return <p>Something went wrong...</p>;
  return <ProfesionalCard profesional={profesional.message} />;
}
