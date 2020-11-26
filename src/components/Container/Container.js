import React from 'react'
import styles from './Container.module.sass'
import Navbar from './Navbar/Navbar'
import Partition from './Partition/Partition'

const Container = () => {
  return (
    <div
      className={styles.container}
    >
      <Navbar />
      <Partition />
      <img className={styles.background} src={`https://clck.ru/S5Khk`} alt='background'/>
      <div className={styles.overlay}/>
    </div>
  )
}

export default Container