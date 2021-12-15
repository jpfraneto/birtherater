import AboutElement from '../AboutElement/AboutElement';
import styles from './styles.module.css';
const data = [
  {
    title: 'Compassion For Babies',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    image: 'https://media4.giphy.com/media/6ul9g1rMhfLH2/200.gif',
  },
  {
    title: 'We were all born once',
    text: 'Lorem ipsum',
    image:
      'https://i.pinimg.com/originals/dc/5b/3e/dc5b3e6764f481eb18378d194a676241.gif',
  },
  {
    title: 'The medical system is broken',
    text: 'Lorem ipsum',
    image: 'https://media4.giphy.com/media/TL2Yr3ioe78tO/200.gif',
  },
  {
    title: 'Time to change the status quo',
    text: 'Lorem ipsum',
    image:
      'https://imagesvc.meredithcorp.io/v3/mm/gif?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2013%2F06%2FyJ7SC.gif&q=85',
  },
];

export default function AboutTheProject() {
  return (
    <div className={styles.aboutBigDiv}>
      {data.map((el, index) => (
        <AboutElement key={index} element={el} />
      ))}
    </div>
  );
}
