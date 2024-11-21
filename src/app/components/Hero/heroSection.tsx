'use client'
import React from 'react'
import Image from 'next/image'
import styles from './hero.module.css'
import { inter } from '@/app/font'
import Button from '../Button/button'
import { FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import {motion} from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter'
import Link from 'next/link'
function HeroSection() {
  return (
    <>
      <section className={`${styles.hero} ${ inter.className}`}
      >
        <h1>Hey! I&apos;m {''} <span> YUMNA NASIR</span>
         <motion.span style={{display:'inline-block', fontSize:"40px"}}
         animate={{rotate : [0, 15 , -10, 20, -10, 0]}}
         transition={{duration: 1.5, repeat: Infinity, ease: "easeInOut"}}
          > 
          👋</motion.span> 
         <br />
        I&apos;m {' '}
        < Typewriter words={[' Front End Web Developer', 'UX UI Designer']}
             loop={Infinity}
             cursor={true}
             cursorStyle={'_'}
             typeSpeed={80}
             deleteSpeed={50}
             delaySpeed={1500}
        
        />
        
        
        </h1>
        <p>I can build user interface for web sites and applications with {' '} <span> React JS</span> 
         and  {" "} <span> Next.Js</span> <br />
        I love the front end development.</p>
        <Button text= {"Hire Me"}/>
        <div className={styles.socialIcons}>
       <Link href={'https://www.facebook.com/'}> <FaFacebookF  size={30} color='black'/></Link>
       <Link href={''}> <FaXTwitter  size={30} color='black'/></Link>
       <Link href={'https://www.instagram.com/'}> <FaInstagram   size={30} color='black'/></Link>
       <Link href={''}> <FaWhatsapp  size={30} color='black'/></Link>
       <Link href={'https://www.linkedin.com/in/yumna-nasir-4382132b5/'}> <FaLinkedin  size={30} color='black'/></Link>
       
        </div>

        <div className={styles.bottomdiv}>
        <Image src={'/behance.png'} alt={'picture'} width={156} height={156}></Image>
        <Image src={'/dribble.png'} alt={'picture'} width={156} height={156}></Image>
        <Image src={'/upwork.png'} alt={'picture'} width={156} height={156}></Image>
        <Image src={'/freelance.png'} alt={'picture'} width={156} height={156}></Image>

        </div>
      </section>
    </>
  )
}

export default HeroSection
