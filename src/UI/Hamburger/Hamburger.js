import React from 'react'
import styles from './Hamburger.module.sass'

const Hamburger = props => {
  const {
    isActive,
    onClick,
    className,
    linesColor,
    linesClassName,
    text,
    textClassName,
    wrapperClassName
  } = props
  const classes = `${className} ${styles.hamburger} ${isActive ? styles.active : ''}`
  return (
      <span className={wrapperClassName} onClick={onClick}>
        <span className={classes}>
          <span className={`${styles.line_1} ${linesClassName}`} style={{backgroundColor: linesColor}}/>
          <span className={`${styles.line_2} ${linesClassName}`} style={{backgroundColor: linesColor}}/>
          <span className={`${styles.line_3} ${linesClassName}`} style={{backgroundColor: linesColor}}/>
        </span>
        {
          text
            ? <span className={textClassName}>{text}</span>
            : null
        }
      </span>
  )
}

export default Hamburger