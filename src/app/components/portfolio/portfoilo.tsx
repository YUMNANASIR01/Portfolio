import React from 'react'
import styles from './portfoilo.module.css'
import { caveat, inter } from '@/app/font'
import Portfoliocard from './portfoliocard/portfoliocard'
function Portfoilo() {
  return (
    <>
      <section id='portfolio' className={styles.Portfoilo}>
        <h1 className={caveat.className}>
         <span>M</span>y  {' '}
         <span>L</span>ast  {' '}
         <span>W</span>ork</h1>
         <p className={inter.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt laudantium officia fuga ipsam quasi corrupti in <br />
      numquam dolor libero explicabo, inventore aperiam, commodi et! Quia iste tempora aut, illum culpa ipsum possimus saepe <br />
      eligendi.</p>
      <div className={styles.mywork}>
       <Portfoliocard/>
</div>

      </section>
    </>
  )
}

export default Portfoilo
