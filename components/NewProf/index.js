import styles from './styles.module.css';
import Link from 'next/link';
import axios from 'axios';
import { useState } from 'react';
import ciudades from '../../src/data/regionesyciudades';

export default function NewProf({ router, setLoading }) {
  const [content, setContent] = useState({});
  const [comunas, setComunas] = useState([]);
  const submitForm = async e => {
    e.preventDefault();
    if (!content.type || !content.name) return alert('please fill the form');
    try {
      setLoading(true);
      const response = await axios.post('/api/profesionales/nuevo', content);
      router.push('/');
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
    <div className={styles.newProf}>
      <form onSubmit={e => submitForm(e)}>
        <div>
          <label>¿Cuál es su nombre?</label>
          <input
            type='text'
            name='name'
            value={content.name}
            onChange={e => handleChange(e)}
          />
        </div>
        <div>
          <select name='type' onChange={e => handleChange(e)}>
            <option value=''>Selecciona Tipo de Profesional</option>
            <option value='Ginecologo'>Ginecologo</option>
            <option value='Ginecologa'>Ginecologa</option>
            <option value='Matron'>Matron</option>
            <option value='Matrona'>Matrona</option>
          </select>
        </div>
        <div>
          <label>¿En qué centro asistencial te atendió?</label>
          <input
            type='text'
            name='center'
            value={content.center}
            onChange={e => handleChange(e)}
          />
        </div>

        <br />
        <label>
          ¿En qué parte del país?
          <br />
          <select
            name='region'
            id='region'
            value={content.region}
            onChange={e => {
              handleChange(e);
              buscarComuna(e);
            }}
          >
            <option value='0'>Regiones</option>
            <option value='tarapaca'>1 - Tarapaca</option>
            <option value='antofagasta'>2 - Antofagasta</option>
            <option value='atacama'>3 - Atacama</option>
            <option value='coquimbo'>4 - Coquimbo</option>
            <option value='valparaiso'>5 - Valparaiso</option>
            <option value='ohiggins'>6 - O&aposHiggins</option>
            <option value='maule'>7 - Maule</option>
            <option value='bio_bio'>8 - Bio - Bio</option>
            <option value='araucania'>9 - Araucania</option>
            <option value='los_lagos'>10 - Los Lagos</option>
            <option value='aisen'>11 - Aisen</option>
            <option value='magallanes_y_antartica'>
              12 - Magallanes Y Antartica
            </option>
            <option value='metropolitana'>13 - Metropolitana</option>
            <option value='los_rios'>14 - Los Rios</option>
            <option value='arica_y_parinacota'>15 - Arica y Parinacota</option>
          </select>
          {comunas && (
            <select name='comuna' id='comuna' onChange={e => handleChange(e)}>
              <option value='0' defaultValue>
                Comunas por Region
              </option>
              {comunas.map((comuna, index) => {
                return (
                  <option
                    key={index}
                    value={comuna.replace(' ', '_').toLowerCase()}
                  >
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
        <a className={styles.returnBtn}> Volver al Inicio</a>
      </Link>
    </div>
  );
}
