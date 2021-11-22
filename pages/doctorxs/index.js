import Link from 'next/link';

export default function Doctorxs() {
  return (
    <main>
      <p>Esta es la página de los doctores</p>
      <Link href='/'>
        <a>Atrás</a>
      </Link>
    </main>
  );
}
