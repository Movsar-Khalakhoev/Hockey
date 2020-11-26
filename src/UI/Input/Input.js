import React from 'react'
import styles from './Input.module.sass'

const Input = props => {
  const {
    filterLabel,
    filterValue,
    filterStyles = {},
    labelStyles ={},
    inputStyles = {},
    isFocus,
    onChange
  } = props

  return (
    <div
      className={styles.active_filter}
      style={filterStyles}
    >
      <p
        className={styles.label}
        style={labelStyles}
      >
        {`${filterLabel}:`}
      </p>
      <input
        placeholder={`${filterLabel}...`}
        type="text"
        className={styles.input}
        style={inputStyles}
        autoFocus={isFocus}
        onChange={event => onChange(event, filterValue)}
      />
    </div>
  )
}

export default Input