import { useState } from 'react';
import styles from './styles.module.css';
const arr1 = Array.from(Array(10).keys());
const arr2 = Array.from(Array(10).keys());
const createGrid = (arr1, arr2) => {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      newArr.push([i, j]);
    }
  }
  return newArr;
};

export default function ThirdSection() {
  const [arr, setArr] = useState(createGrid(arr1, arr2));
  const [number, setNumber] = useState(0);
  const [sum, setSum] = useState(0);
  const manageClick = el => {
    setNumber(el[0] + el[1]);
    setSum(prevSum => prevSum + el[0] + el[1]);
  };
  const executableFunc = (el, index) => {
    return (
      <div
        key={index}
        onClick={() => manageClick(el)}
        className={styles.squareElement}
      >{`${el[0]}, ${el[1]}`}</div>
    );
  };
  return (
    <div className={styles.divofdivs}>
      {arr.map((el, index) => executableFunc(el, index))}
      <div className={styles.chosenNumber}>
        {number}, the sum is {sum}{' '}
        <button onClick={() => setSum(0)}>Clear Sum</button>
      </div>
    </div>
  );
}
