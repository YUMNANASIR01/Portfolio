'use client'
import React from 'react'
import styles from './testimonial.module.css'
import { caveat} from '@/app/font'
import useEmblaCarousel from 'embla-carousel-react'
import Testimonialcard from './Testimonialcard/testimonialcard'
import Autoplay from 'embla-carousel-autoplay'

function Testimonial() {
  const [emblaRef] = useEmblaCarousel({ loop: true },[Autoplay({delay : 3000})] )

  return (
   
    <>
      <section id='testimonials' className={styles.testimonial}>
        <h1 className={caveat.className}><span>W</span>hat {' '}
           <span>O</span>ther {' '}
            <span>P</span>eople {' '} 
              <span>S</span>ay</h1>


              <div className={styles.embla} ref={emblaRef}>
              <div className={styles.embla__container}>

              <Testimonialcard/>

              </div>
              </div>
      </section>
    </>
  )
}

export default Testimonial
