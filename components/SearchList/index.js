import React from 'react';
import Link from 'next/link';

export default function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map(person => (
    <Link href={`/profesionales/${person.slug}`}>
      <li key={person.id}>
        {person.name} - {person.tipo}
      </li>
    </Link>
  ));
  return <ul>{filtered}</ul>;
}
