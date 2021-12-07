import styles from './styles.module.css';

const footerElements = [
  [
    { name: 'Rodrigo', id: Math.random().toString },
    { name: 'Jaime', id: Math.random().toString },
    { name: 'Rubén', id: Math.random().toString },
    { name: 'Carlos', id: Math.random().toString },
  ],
  [
    { name: 'Camila', id: Math.random().toString },
    { name: 'Sofía', id: Math.random().toString },
    { name: 'María Ignacia', id: Math.random().toString },
    { name: 'Perla', id: Math.random().toString },
  ],
  [
    { name: 'Perro', id: Math.random().toString },
    { name: 'Gato', id: Math.random().toString },
    { name: 'Iguana', id: Math.random().toString },
    { name: 'León', id: Math.random().toString },
  ],
  [
    { name: 'Verde', id: Math.random().toString },
    { name: 'Azul', id: Math.random().toString },
    { name: 'Rojo', id: Math.random().toString },
    { name: 'Morado', id: Math.random().toString },
  ],
];

export default function FooterSection() {
  return (
    <section className={styles.secondSection}>
      <div className={styles.elementsDiv}>
        {footerElements.map((element, index) => (
          <div key={index}>
            <ul>
              {element.map(el => (
                <li key={el.id}>{el.name}</li>
              ))}
            </ul>
          </div>
        ))}
        <img
          className={styles.bottomImage}
          src='https://us.123rf.com/450wm/pazhyna/pazhyna1604/pazhyna160400261/55571655-m%C3%ADstica-fondo-del-cielo-de-la-noche-con-la-media-luna-las-nubes-y-estrellas-noche-de-luna-ilustraci%C3%B3.jpg?ver=6'
        />
      </div>

      <p className={styles.copyrights}>Copyrights - The Open Source Factory</p>
    </section>
  );
}
