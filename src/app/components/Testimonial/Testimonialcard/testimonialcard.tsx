import React from 'react';
import styles from '@/app/components/Testimonial/Testimonialcard/testimonialcard.module.css'
import Image from 'next/image';
import { inter } from '@/app/font';
import { testimnoialcard } from '@/app/constant/testimnoialcard';

function Testimonialcard() {
  return (
    <>
      {testimnoialcard.map((card, index) => (
        <div className={`${styles.card} ${inter.className}`} key={index}>
          <div className={styles.cardimage}>
            <Image src={card.src} alt={'picture'} height={150} width={150} />
          </div>
          <p>{card.name}</p>
          <p>
            <span>{card.title}</span>
          </p>
          <p style={{ marginBottom: '0px' }}>{card.discription}</p>
        </div>
      ))}
    </>
  );
}

export default Testimonialcard;
