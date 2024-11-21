'use client'
import React from 'react'
import Image from 'next/image'
import styles from './aboutbottomimage.module.css'
import {motion} from 'framer-motion'

// for parent
const containerVarients = {
  hidden : {},
  show :{
  transition : {
    staggerChildren : 0.2
  }
},
} 
//for child
const itemsVarients = {
  hidden : {opacity:0, y:20},
  show :{opacity:1, y: 0},
} 

function   AboutBottomImage() {
  return (
    <>
      <motion.section className={styles.aboutbottomimage}
       variants={containerVarients}
       initial= 'hidden'
       whileInView= 'show'
      >
       <motion.div   variants={itemsVarients}> <Image src={'/html.png'} alt={'picture'} width={96} height={96}></Image></motion.div>
       <motion.div   variants={itemsVarients}> <Image src={'/css.png'} alt={'picture'} width={96} height={96}></Image></motion.div>
       <motion.div   variants={itemsVarients}><Image src={'/typescript.png'} alt={'picture'} width={70} height={70}></Image></motion.div>
        <motion.div   variants={itemsVarients}><Image src={'/git.png'} alt={'picture'} width={96} height={96}></Image></motion.div>
        <motion.div   variants={itemsVarients}><Image src={'/figma.png'} alt={'picture'} width={96} height={96}></Image></motion.div>
        <motion.div   variants={itemsVarients}><Image src={'/react.png'} alt={'picture'} width={96} height={96}></Image></motion.div>
       <motion.div   variants={itemsVarients}> <Image src={'/node.png'} alt={'picture'} width={96} height={96}></Image></motion.div>
        <motion.div   variants={itemsVarients}> <Image src={'/next.png'} alt={'picture'} width={96} height={96}></Image></motion.div>
  
      </motion.section>
    </>
  )
}

export default AboutBottomImage
