'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { inter } from '@/app/font';
import styles from '@/app/components/Services-section/service-card/servicecards.module.css';
import { servicescards } from '@/app/constant/servicescard';
import { motion, useMotionValue, useTransform } from 'framer-motion';

function Servicescard() {
  return (
    <>
      {servicescards.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </>
  );
}

// Card component
function Card({ item }: { item: { src: string; title: string; Description: string } }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [25, -25]);
  const rotateY = useTransform(mouseX, [-100, 100], [-25, 25]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      className={`${styles.card} ${inter.className}`}
      ref={cardRef}
      style={{
        perspective: 1000,
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.cardimg}>
        <Image src={item.src} alt="picture" height={60} width={60} />
      </div>
      <h1>{item.title || 'Default Title'}</h1> 
      <p>{item.Description}</p>
    </motion.div>
  );
}

export default Servicescard;








