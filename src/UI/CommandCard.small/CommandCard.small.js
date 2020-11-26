import React from 'react'
import styles from './CommandCard.small.module.sass'
import {Link} from 'react-router-dom'
import instagram from '../../img/social/instagram.png'
import vk from '../../img/social/vk.png'
import telegram from '../../img/social/telegram.png'
import youtube from '../../img/social/youtube.png'

const CommandCardSmall = ({index, command}) => {
  const socialImages = {instagram, vk, telegram, youtube}

  return (
    <div key={index} className={styles.command_card}>
      <Link className={styles.command_image_container} to={`/app/commands/childs/${index}`}>
        <img className={styles.command_image} src={command.image} alt={command.name}/>
      </Link>
      <div className={styles.command_info}>
        <Link to={`/app/commands/childs/${index}`}>
          <h3 className={styles.command_name}>{command.name}</h3>
        </Link>
        <a href={`tel:${command.phone}`} className={styles.command_phone}>{command.phone}</a>
        <a href={`mailto:${command.email}`} className={styles.command_email}>{command.email}</a>
        {
          command.player_position
            ? <p className={styles.required}>
                <strong>Требуемая позиция: </strong>
                {command.player_position}
              </p>
            : null
        }
        {
          command.social
            ? <div className={styles.social}>
                {
                  Object.keys(command.social).map(social => (
                    <a href={command.social[social]} target='_blank' rel="noreferrer" key={social} className={styles[social]}>
                      <img src={socialImages[social]} alt={social}/>
                    </a>
                  ))
                }
              </div>
            : null
        }
        {
          command.player_position
            ? <p className={styles.give_up}>Откликнуться</p>
            : null
        }
      </div>
    </div>
  )
}

export default CommandCardSmall