import React from 'react'
import styles from './Container.module.sass'
import Navbar from './Navbar/Navbar'
import Partition from './Partition/Partition'

const Container = () => {
  return (
    <div>
      <Navbar />
      <Partition />
    </div>
  )
}

export default Container