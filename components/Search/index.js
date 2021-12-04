import React, { useState } from 'react';
import styles from './styles.module.css';
import ciudades from '../../src/data/regionesyciudades';

export default function Search({ data, profesionales, setProfesionales }) {
  const [searchType, setSearchType] = useState(true);
  const [region, setRegion] = useState('');
  const [comuna, setComuna] = useState([]);

  const updateSearch = e => {
    let profs;
    if (e.target.name === region) {
      return (profs = data.message.filter(x => x.region === e.target.value));
    }
    if (searchType) {
      profs = data.message.filter(x =>
        x.name.toLowerCase().includes(e.target.value)
      );
    } else {
      profs = data.message.filter(x => x.comuna === e.target.value);
    }
    setProfesionales(profs);
  };
  const buscarComuna = e => {
    setRegion(ciudades[e.target.value]);
  };

  const cambioComuna = e => {
    updateSearch(e);
    setComuna(e.target.value);
  };
  return (
    <section>
      <div className={styles.searchOptionsDiv}>
        <span
          className={`${styles.searchOptions} ${
            searchType && styles.activeSearch
          }`}
          onClick={() => {
            setSearchType(true);
          }}
        >
          Buscar por Nombre
        </span>
        <span
          className={`${styles.searchOptions} ${
            !searchType && styles.activeSearch
          }`}
          onClick={() => {
            setSearchType(false);
          }}
        >
          Buscar por Comuna
        </span>
      </div>
      <div className='inputsDiv'>
        {searchType ? (
          <input
            onChange={e => updateSearch(e)}
            className={styles.searchInput}
            type='text'
            placeholder='Nombre profesional'
          />
        ) : (
          <>
            <select
              name='region'
              id='region'
              className={styles.regionSelect}
              onChange={e => {
                updateSearch(e);
                buscarComuna(e);
              }}
            >
              <option value='0'>Región</option>
              <option value='tarapaca'>1 - Tarapaca</option>
              <option value='antofagasta'>2 - Antofagasta</option>
              <option value='atacama'>3 - Atacama</option>
              <option value='coquimbo'>4 - Coquimbo</option>
              <option value='valparaiso'>5 - Valparaiso</option>
              <option value='ohiggins'>6 - O'Higgins</option>
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
              <option value='arica_y_parinacota'>
                15 - Arica y Parinacota
              </option>
            </select>
            {region && (
              <select
                className={styles.regionSelect}
                name='comuna'
                id='comuna'
                onChange={cambioComuna}
              >
                <option value='0' defaultValue>
                  Selecciona la Comuna
                </option>
                {region.map((comuna, index) => {
                  return (
                    <option value={comuna.replace(' ', '_').toLowerCase()}>
                      {comuna}
                    </option>
                  );
                })}
              </select>
            )}
          </>
        )}
      </div>
    </section>
  );
}
