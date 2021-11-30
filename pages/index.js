import useSWR from 'swr';
import Link from 'next/link';
import Loader from '../components/Loader';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Profesionals({ profesionales }) {
  const { data, error } = useSWR('http://localhost:3000/api/profesionales');
  if (error) return <div>Failed to load</div>;
  if (!data) return <Loader />;

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
        {data &&
          data.message
            .filter(x => x.name.toLowerCase())
            .map(prof => (
              <li key={prof._id}>
                <Link href={`/profesionales/id/${prof._id}`}>
                  <a>
                    {prof.name} - {prof.type}
                  </a>
                </Link>
              </li>
            ))}
      </ul>
    </main>
  );
}
