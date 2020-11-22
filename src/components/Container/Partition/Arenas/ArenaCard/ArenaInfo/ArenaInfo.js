import React from "react"
import {YMaps, Map, Placemark} from 'react-yandex-maps'
import styles from "./ArenaInfo.module.sass"
import instagram from '../../../../../../img/social/instagram.png'
import vk from '../../../../../../img/social/vk.png'
import telegram from '../../../../../../img/social/telegram.png'
import youtube from '../../../../../../img/social/youtube.png'
import {Link} from 'react-router-dom'


const ArenaInfo = ({info, center, zoom}) => {
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
        </div>
        <div className={styles.map_container}>
          <YMaps>
            <Map
              defaultState={{ center: [+info.coordinates[0], +info.coordinates[1]], zoom: 15 }}
              style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              }}
            >
              <Placemark geometry={[+info.coordinates[0], +info.coordinates[1]]} />
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  )
}

export default ArenaInfo
