import Link from 'next/link';
import Loader from '../../components/Loader';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import ciudades from '../../src/data/regionesyciudades';

export default function NewProfessional({}) {
  const [content, setContent] = useState({});
  const [comunas, setComunas] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const submitForm = async e => {
    e.preventDefault();
    if (!content.type || !content.name) return alert('please fill the form');
    try {
      setLoading(true);
      const response = await axios.post('/api/profesionales/nuevo', content);
      router.push('/profesionales');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = e => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const buscarComuna = e => {
    handleChange(e);
    setComunas(ciudades[e.target.value]);
  };
  return (
    <>
      {!loading ? (
        <main>
          <form onSubmit={e => submitForm(e)}>
            <label>
              ¿Cuál es su nombre?
              <input
                type='text'
                name='name'
                value={content.name}
                onChange={e => handleChange(e)}
              />
            </label>
            <br />
            <select name='type' onChange={e => handleChange(e)}>
              <option value=''>Selecciona Tipo de Profesional</option>
              <option value='Ginecologo'>Ginecologo</option>
              <option value='Ginecologa'>Ginecologa</option>
              <option value='Matron'>Matron</option>
              <option value='Matrona'>Matrona</option>
            </select>
            <br />
            <label>
              ¿En qué centro asistencial te atendió?
              <input
                type='text'
                name='center'
                value={content.region}
                onChange={e => handleChange(e)}
              />
            </label>
            <br />
            <label>
              ¿En qué parte del país?
              <br />
              <select name='region' id='region' onChange={e => buscarComuna(e)}>
                <option value='0'>Regiones</option>
                <option value='1'>1 - Tarapaca</option>
                <option value='2'>2 - Antofagasta</option>
                <option value='3'>3 - Atacama</option>
                <option value='4'>4 - Coquimbo</option>
                <option value='5'>5 - Valparaiso</option>
                <option value='6'>6 - O'Higgins</option>
                <option value='7'>7 - Maule</option>
                <option value='8'>8 - Bio - Bio</option>
                <option value='9'>9 - Araucania</option>
                <option value='10'>10 - Los Lagos</option>
                <option value='11'>11 - Aisen</option>
                <option value='12'>12 - Magallanes Y Antartica</option>
                <option value='13'>13 - Metropolitana</option>
                <option value='14'>14 - Los Rios</option>
                <option value='15'>15 - Arica y Parinacota</option>
              </select>
              {comunas && (
                <select
                  name='comuna'
                  id='comuna'
                  onChange={e => handleChange(e)}
                >
                  <option value='0' defaultValue>
                    Comunas por Region
                  </option>
                  {comunas.map((comuna, index) => {
                    return (
                      <option value={comuna.replace(' ', '_').toLowerCase()}>
                        {comuna}
                      </option>
                    );
                  })}
                </select>
              )}
            </label>

            <br />
            <button type='submit'>Agregar</button>
          </form>
          <Link href='/'>
            <a>Volver al Inicio</a>
          </Link>
        </main>
      ) : (
        <>
          <Loader />
          <p>Agregando a la base de datos</p>
        </>
      )}
    </>
  );
}
