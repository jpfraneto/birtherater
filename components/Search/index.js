import React, { useState } from 'react';
import styles from './styles.module.css';
import SearchList from '../SearchList';

export default function Search({ details }) {
  const [searchField, setSearchField] = useState('');
  const [tipo, setTipo] = useState('');
  const filteredPersons = details.filter(person => {
    return (
      person.name.toLowerCase().includes(searchField.toLowerCase()) &&
      person.tipo === tipo
    );
  });
  const handleChange = e => {
    setSearchField(e.target.value);
  };

  const handleRadioChange = e => {
    setTipo(e.target.value);
  };

  function searchList() {
    return <SearchList filteredPersons={filteredPersons} />;
  }

  return (
    <section>
      <input
        className={styles.searchField}
        type='search'
        placeholder='search people'
        onChange={handleChange}
      />
      <label>
        Ginecologo
        <input
          type='radio'
          name='tipo'
          value='ginecologo'
          onChange={handleRadioChange}
        />
      </label>
      <label>
        Matron
        <input
          type='radio'
          name='tipo'
          value='matron'
          onChange={handleRadioChange}
        />
      </label>
      {searchField && searchList()}
    </section>
  );
}
