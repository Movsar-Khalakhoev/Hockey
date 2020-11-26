import React from 'react'
import styles from './PeopleCard.module.sass'

const PeopleCard = props => {
  const {
    cardStyle = {},
    cardClass = '',
    imageContainerStyle = {},
    contentStyle = {},
    people,
    requiredMessage
  } = props

  return (
    <div
      style={cardStyle}
      className={`${styles.card} ${cardClass}`}
    >
      {
        people.image
          ? <div
              style={imageContainerStyle}
              className={styles.image_container}
            >
              <img className={styles.image} src={people.image} alt='Карточка'/>
            </div>
          : null
      }
      <div
        style={contentStyle}
        className={styles.content}
      >
        {
          people.name
            ? <h3 className={styles.name}>{people.name} <hr/></h3>
            : null
        }
        {
          people.email
            ? <p className={styles.email}>{people.email}</p>
            : null
        }
        {
          people.phone
            ? <p className={styles.phone}>{people.phone}</p>
            : null
        }
        {
          people.player_position
            ? <p className={styles.player_position}>{people.player_position}</p>
            : null
        }
        {
          requiredMessage
            ? <button className={styles.require}>{requiredMessage}</button>
            : null
        }
      </div>
      <span className={styles.overlay}/>
    </div>
  )
}

export default PeopleCard