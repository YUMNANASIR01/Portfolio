'use client'
import React, { useState } from 'react'
import styles from './header.module.css'
import { caveat, inter } from '../../font'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import {  AnimatePresence, motion } from 'framer-motion'
function Header() {
     const [isOpen, setIsOpen] = useState(false)
  return (
    <>
     <header className={styles.header}>
        <nav className={styles.nav} >
            <h1 className={caveat.className}>Yumna Nasir </h1>
            <AnimatePresence>
            {isOpen ? (
                 <motion.ul className={ `${inter.className} ${styles.navul} ${styles.active} `}
                 key={"active"}
                 
                  initial= {{opacity:0, width:0}}
                  animate= {{opacity:1, width: "30%" }}
                  exit={{opacity:0, width:0}}
                  transition={{duration: 2, type: "spring"}}
                  >
                  <RxCross2 size={27} className={styles.closed} onClick={()=>{setIsOpen(false)}}/>
                 <li><Link href={'/'}>Home</Link></li>
                 <li><Link href={'#about'}>About</Link></li>
                 <li><Link href={'#portfolio'}>Portfolio</Link></li>
                 <li><Link href={'#services'}>Services</Link></li>
                 <li><Link href={'#testimonials'}>Testimonials</Link></li>
                 <li><Link href={'#contact'}>Contact</Link></li>
             </motion.ul>
            ) : 
            
            
            (   <ul className={ `${inter.className} ${styles.navul}`}>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'#about'}>About</Link></li>
                <li><Link href={'#portfolio'}>Portfolio</Link></li>
                <li><Link href={'#services'}>Services</Link></li>
                <li><Link href={'#testimonials'}>Testimonials</Link></li>
                <li><Link href={'#contact'}>Contact</Link></li>
            </ul>) }
            </AnimatePresence>
            <GiHamburgerMenu size={30} className={styles.menu} onClick={()=>{setIsOpen(!isOpen)}}/>
        </nav>
     </header>
    </>
  )
}

export default  Header
