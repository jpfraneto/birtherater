import styles from './styles.module.css';
import Link from 'next/link';
import ProfesionalProfile from '../../components/ProfesionalProfile';
import { useState } from 'react';
import { MdOutlineRateReview } from 'react-icons/md';

export default function ProfessionalCard({
  setShowProfessional,
  professional,
}) {
  if (professional.reviews) {
    const getAverage =
      professional.reviews.reduce((x, y) => x + +y.grade, 0) /
      professional.reviews.length;
  }
  return (
    // <Link href={`/profesionales/id/${professional._id}`} passHref>
    //   <div className={styles.profCardDiv}>
    //     <span className={styles.reviewsSpan}>
    //       {getAverage && getAverage.toFixed(2)} {'     '}
    //       <MdOutlineRateReview />{' '}
    //       {professional.reviews ? professional.reviews.length : 0}
    //     </span>
    //     <p className={styles.profName}>{professional.name}</p>
    //     <p className={styles.profType}>{professional.type}</p>
    //     <p className={styles.profRegion}>{professional.region}</p>
    //   </div>
    // </Link>
    <div
      onClick={() => {
        setShowProfessional(professional);
      }}
      className={styles.profCardDiv}
    >
      <span className={styles.reviewsSpan}>
        {getAverage && getAverage.toFixed(2)} {'     '}
        <MdOutlineRateReview />{' '}
        {professional.reviews ? professional.reviews.length : 0}
      </span>
      <p className={styles.profName}>{professional.name}</p>
      <p className={styles.profType}>{professional.type}</p>
      <p className={styles.profRegion}>{professional.region}</p>
    </div>
  );
}
