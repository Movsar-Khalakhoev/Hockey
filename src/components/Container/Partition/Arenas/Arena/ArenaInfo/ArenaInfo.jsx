import React from "react"
import styles from "./ArenaInfo.module.sass"
import instagram from './../../../../../../img/social/instagram.png'
import vk from './../../../../../../img/social/vk.png'
import telegram from './../../../../../../img/social/telegram.png'
import youtube from './../../../../../../img/social/youtube.png'
import {Link} from 'react-router-dom'

const ArenaInfo = ({info}) => {
  const socialImages = {instagram, vk, telegram, youtube}
  const link = `/app/arenas/${info.id}`
  return (
    <div className={styles.info}>
      <Link
        to={link}
        className={styles.link}
      >
        <h2>{info.name}</h2>
      </Link>
      <div className={styles.info_container}>
        <div className={styles.more}>
          <div className={styles.additional}>
            {
              info.additional.map((info, index) => (
                <p key={index}>{info[0]}: {info[1]}</p>
              ))
            }
          </div>
          <p className={styles.address}><strong>Адрес</strong>: <span>{info.address}</span></p>
          <p className={styles.working_hours}><strong>График работы</strong>: {info.workingHours}</p>
          <div className={styles.social}>
            {
              Object.keys(info.social).map(social => (
                <a href={info.social[social]} target='_blank' key={social} className={styles[social]}>
                  <img src={socialImages[social]} alt={social}/>
                </a>
              ))
            }
          </div>
        </div>
        <div className={styles.map}></div>
      </div>
    </div>
  )
}

export default ArenaInfo
