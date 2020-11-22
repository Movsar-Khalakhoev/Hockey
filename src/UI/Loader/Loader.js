import React from 'react'
import styles from './Loader.module.sass'

const Loader = ({width, height}) => {
  const elems = new Array(4).fill('')
  const elem = i => <div key={i} style={{
    borderWidth: `${width * 0.1}px`,
    width: `${width * 0.8}px`,
    height: `${height * 0.8}px`,
    margin: `${width * 0.1}px`
  }}/>
  return (
    <div className={styles.center} >
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
        className={styles.lds_ring}>
        {elems.map((_, i) => elem(i))}
      </div>
    </div>
  )
}

export default Loader