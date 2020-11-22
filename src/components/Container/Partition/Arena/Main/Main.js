import React from 'react'
import styles from './Main.module.sass'
import ImagesSlider from '../../../../../UI/ImagesSlider/ImagesSlider'
import instagram from '../../../../../img/social/instagram.png'
import vk from '../../../../../img/social/vk.png'
import telegram from '../../../../../img/social/telegram.png'
import youtube from '../../../../../img/social/youtube.png'
import {connect} from 'react-redux'

const Main = ({arena}) => {
  const socialImages = {instagram, vk, telegram, youtube}

  return (
    <div className={styles.arena_content}>
      <div className={styles.information}>
        <h1 className={styles.name}>{arena.name}</h1>
        <div className={styles.additional}>
          {
            arena.additional.map((info, index) => (
              <span className={styles.additional_item} key={index}>{`${info[0]}: ${info[1]}`}</span>
            ))
          }
        </div>
        <p className={styles.address}><strong>Адрес</strong>: <span>{arena.address}</span></p>
        <p className={styles.site}><strong>Сайт</strong>:
          <a className={styles.site_link} target='_blank' rel="noreferrer" href={arena.site}> {arena.name}</a>
        </p>
        <p className={styles.working_hours}><strong>График работы</strong>: {arena.workingHours}</p>
        <div className={styles.social}>
          {
            Object.keys(arena.social).map(social => (
              <a href={arena.social[social]} target='_blank' rel="noreferrer" key={social} className={styles[social]}>
                <img src={socialImages[social]} alt={social}/>
              </a>
            ))
          }
        </div>
      </div>
      <div className={styles.images}>
        <ImagesSlider
          images={arena.images}
          width='100%'
          height='100%'
        />
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    arena: state.arena
  }
}

export default connect(mapStateToProps)(Main)
