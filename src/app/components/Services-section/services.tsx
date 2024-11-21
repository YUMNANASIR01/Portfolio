import React from 'react'
import styles from './services.module.css'
import { caveat, inter } from '@/app/font'
import Servicescard from './service-card/servicescards'

function Services() {
  return (
    <>
      <section id='services' className={styles.services} >
       <h1 className={caveat.className}><span>W</span>hat {' '}
        <span> I</span>{' '}
        <span>  D</span>o {' '}
        <span>F</span>or {' '}
           <span>C</span>lients
            </h1>
            <p className={inter .className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt laudantium officia fuga ipsam quasi corrupti in <br />
            numquam dolor libero explicabo, inventore aperiam, commodi et!</p>

            <div className={styles.servicecarddiv}>
            <Servicescard/>
            </div>
      </section>
    </>
  )
}

export default Services
