'use client';
import React from 'react'
import Image from 'next/image'
import styles from './about.module.css'
import { caveat, inter } from '@/app/font'
import Button from '../Button/button'
import {motion} from 'framer-motion'
function About() {
  return (
    <div>
      <section id='about' className={styles.about}>
        <motion.div className={styles.aboutleftDiv}
        initial= {{opacity:0, x: -100}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:2, type:"spring"}}
        >
            <h1 className={caveat . className}>Yumna Nasir</h1>
            <p className={caveat . className}> Freelance Web Developer</p>
            <h2 className={`${styles.detailstext} ${ inter.className}`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
dolorum odio magni possimus corrupti molestiae labore voluptatum
ut autem deleniti facilis tempora commodi dolores debitis repellendus
excepturi nisi? Quisquam suscipit iste facere molestiae saepe
voluptates.     </h2>

    <Button text={"Contact Me"} />
        </motion.div>

        <motion.div className={styles.aboutrightdiv}
        initial= {{opacity:0 , x: 100}}
        whileInView={{opacity: 1 , x:70}}
        transition={{duration:2, type:"spring"}}
        >
         <Image  src={'/pro-pic1.png'} alt={'picture'} height={400} width={550} className={styles.img}></Image>
         </motion.div>
      </section>
    </div>
  )
}

export default About
