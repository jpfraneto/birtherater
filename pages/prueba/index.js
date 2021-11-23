import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export async function getStaticProps() {
  const facts = await fetch('https://catfact.ninja/facts');
  console.log('the facts are : ', facts.data);
  return {
    props: { facts: facts.data },
  };
}

export default function Prueba({ facts }) {
  console.log('the props are: ', facts);
  return <main></main>;
}
