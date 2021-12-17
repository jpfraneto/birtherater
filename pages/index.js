import useSWR from 'swr';
import Search from '../components/Search';
import ProfessionalsDisplay from '../components/ProfessionalsDisplay';
import FooterSection from '../components/FooterSection';
import Loader from '../components/Loader';
import LandingSection from '../components/LandingSecond';
import AboutTheProject from '../components/AboutTheProject';
import ProfesionalProfile from '../components/ProfesionalProfile';
import ThirdSection from '../components/ThirdSection';
import Modal from '../components/Modal';
import ReactCSSTransitionGroup from 'react-transition-group';
import { useState } from 'react';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Profesionals({}) {
  const [name, setName] = useState('');
  const [showProfessional, setShowProfessional] = useState(null);
  const [profesionales, setProfesionales] = useState(null);
  const { data, error } = useSWR('http://localhost:3000/api/profesionales');
  if (error) return <div>Failed to load</div>;
  if (!data) return <Loader />;

  return (
    <main>
      {showProfessional && (
        <ReactCSSTransitionGroup
          transitionName='example'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {/* <ProfesionalProfile
            key='wenacompare'
            setShowProfessional={setShowProfessional}
            profesional={showProfessional}
          /> */}
          <h1>Wena compare</h1>
        </ReactCSSTransitionGroup>
      )}
      <section
        id='main-section'
        class={`${showProfessional && 'second-class'}`}
      >
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
          setShowProfessional={setShowProfessional}
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
