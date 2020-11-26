import React from 'react'
import styles from './Commands.module.sass'
import CommandCardSmall from '../../../../../UI/CommandCard.small/CommandCard.small'

const Commands = ({commands}) => {
  return (
    <div className={styles.commands}>
      <h2 className={styles.title}>Список детских команд</h2>
      <div className={styles.commands_list}>
        {
          commands.map((command, index) => {
            return <CommandCardSmall
              key={index}
              index={index}
              command={command}
            />
          })
        }
      </div>
    </div>
  )
}

export default Commands
