import React from 'react'
import styles from './Commands.module.sass'
import {Link} from 'react-router-dom'
import instagram from '../../../../../img/social/instagram.png'
import vk from '../../../../../img/social/vk.png'
import telegram from '../../../../../img/social/telegram.png'
import youtube from '../../../../../img/social/youtube.png'

const Commands = ({commands}) => {
  const socialImages = {instagram, vk, telegram, youtube}
  return (
    <div className={styles.commands}>
      <h2 className={styles.title}>Список детских команд</h2>
      <div className={styles.commands_list}>
        {
          commands.map((command, index) => {
            return <div key={index} className={styles.command_card}>
              <Link className={styles.command_image_container} to={`/app/commands/childs/${index}`}>
                <img className={styles.command_image} src={command.image} alt={command.name}/>
              </Link>
              <div className={styles.command_info}>
                <Link to={`/app/commands/childs/${index}`}>
                  <h3 className={styles.command_name}>{command.name}</h3>
                </Link>
                <a href={`tel:${command.phone}`} className={styles.command_phone}>{command.phone}</a>
                <a href={`mailto:${command.email}`} className={styles.command_email}>{command.email}</a>
                <div className={styles.social}>
                  {
                    Object.keys(command.social).map(social => (
                      <a href={command.social[social]} target='_blank' rel="noreferrer" key={social} className={styles[social]}>
                        <img src={socialImages[social]} alt={social}/>
                      </a>
                    ))
                  }
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Commands
