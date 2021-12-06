import Loader from '../../../../components/Loader';
import EditProfessional from '../../../../components/EditProfessional';
import { useRouter } from 'next/router';
import { useUser } from '../../../../src/data/useUser';

export default function EditProf() {
  const router = useRouter();
  const { profesional, isLoading, isError } = useUser(router.query.id);
  return (
    <>{profesional ? <EditProfessional data={profesional} /> : <Loader />}</>
  );
}
