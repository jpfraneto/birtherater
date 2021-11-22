import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Busqueda() {
  const [profName, setProfName] = useState('');
  const [profType, setProfType] = useState('');
  const router = useRouter();

  const submitForm = e => {
    e.preventDefault();
    if (!profType) return alert('Tienes que elegir un tipo de profesional!');
    if (!profName) return alert('Por favor ingresa el nombre del profesional');
    const doctorName = router.push(
      `/profesional/${profType}xs/${slugizeDoc(profName)}`
    );
  };
  const slugizeDoc = name => {
    return name.toLowerCase().replace(' ', '-');
  };
  return (
    <main>
      <p>Acá va el componente de búsqueda de un profesional</p>
      <form onSubmit={e => submitForm(e)}>
        <div>
          <label>
            <input
              type='radio'
              value='doctor'
              name='profType'
              onChange={e => setProfType(e.target.value)}
            />
            Doctor@
          </label>
        </div>
        <div>
          <label>
            <input
              type='radio'
              value='matron'
              name='profType'
              onChange={e => setProfType(e.target.value)}
            />
            Matron@
          </label>
        </div>
        <div>
          <label>
            <input
              placeholder='Ingresa el nombre del profesional que buscas'
              onChange={e => setProfName(e.target.value)}
            />
          </label>
        </div>
        <button type='submit'>Buscar!</button>
      </form>
    </main>
  );
}
