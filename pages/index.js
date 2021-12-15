import useSWR from 'swr';
import Search from '../components/Search';
import ProfessionalsDisplay from '../components/ProfessionalsDisplay';
import FooterSection from '../components/FooterSection';
import Loader from '../components/Loader';
import LandingSection from '../components/LandingSecond';
import AboutTheProject from '../components/AboutTheProject';
import ThirdSection from '../components/ThirdSection';
import Modal from '../components/Modal';
import { useState } from 'react';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Profesionals({}) {
  const [name, setName] = useState('');
  const [profesionales, setProfesionales] = useState(null);
  const { data, error } = useSWR('http://localhost:3000/api/profesionales');
  if (error) return <div>Failed to load</div>;
  if (!data) return <Loader />;

  return (
    <main>
      <section class='main-section'>
        <h1>Profesionales del Parto</h1>
        <h4>
          Evalúa y revisa evaluaciones de quien va a estar encargado de tu parto
        </h4>
        <Search
          setProfesionales={setProfesionales}
          profesionales={profesionales}
          data={data}
        />

        <ProfessionalsDisplay
          professionals={profesionales ? profesionales : data.message}
        />
        <LandingSection />
        <AboutTheProject />
        <ThirdSection />
      </section>
      <FooterSection />
    </main>
  );
}
