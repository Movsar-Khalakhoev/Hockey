import React from "react"
import styles from "./ArenaInfo.module.sass"
import instagram from '../../../../../../img/social/instagram.png'
import vk from '../../../../../../img/social/vk.png'
import telegram from '../../../../../../img/social/telegram.png'
import youtube from '../../../../../../img/social/youtube.png'
import {Link} from 'react-router-dom'
import mapImage from '../../../../../../img/arenaCard/location.svg'


const ArenaInfo = ({info}) => {
  const socialImages = {instagram, vk, telegram, youtube}
  const link = `/app/arenas/${info.id}`
  return (
    <div className={styles.info}>
      <Link
        to={link}
        className={styles.link}
      >
        <h2 className={styles.name}>{info.name}</h2>
      </Link>
      <div className={styles.info_container}>
        <div className={styles.more}>
          <p className={styles.address}><strong>Адрес</strong>: <span>{info.address}</span></p>
          <p className={styles.site}><strong>Сайт</strong>:
            <a className={styles.site_link} target='_blank' rel="noreferrer" href={info.site}>{info.name}</a>
          </p>
          <p className={styles.working_hours}><strong>График работы</strong>: {info.workingHours}</p>
          <div className={styles.social}>
            {
              Object.keys(info.social).map(social => (
                <a href={info.social[social]} target='_blank' rel="noreferrer" key={social} className={styles[social]}>
                  <img src={socialImages[social]} alt={social}/>
                </a>
              ))
            }
          </div>
          <Link to={link} className={styles.map_show}>
            <img className={styles.map_show_img} src={mapImage} alt="Показать на карте"/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ArenaInfo
