'use client';
import React from 'react';
import styles from './portfoliocard.module.css';
import Image from 'next/image';
import { portfolioCard } from '@/app/constant/portfolioCard';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Portfoliocard() {
  return (
    <>
      {portfolioCard.map((item) => {
        return (
          <motion.div
            className={styles.card}
            key={item.id}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Link href={item.href}>
              <div className={styles.cardImage}>
                {item.type === 'image' ? (
                  <Image
                    src={item.src}
                    alt={'picture'}
                    width={407}
                    height={407}
                    className={styles.img}
                  />
                ) : (
                  <video src={item.src} autoPlay loop muted controls></video>
                )}
              </div>
            </Link>
            <div className={styles.cardText}>{item.title}</div>
          </motion.div>
        );
      })}
    </>
  );
}

export default Portfoliocard;

