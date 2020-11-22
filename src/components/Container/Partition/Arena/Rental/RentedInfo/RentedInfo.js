import React, {useContext, useState} from 'react'
import styles from './RentedInfo.module.sass'
import {connect} from 'react-redux'
import {rentIntervalAction} from '../../../../../../redux/actions/Arena'
import {ArenaId} from '../../Arena'
import Loader from '../../../../../../UI/Loader/Loader'

const RentedInfo = ({rentInterval, rentedHours, rentIntervalLoading, date, hours, setHours}) => {
  const [error, setError] = useState(false)
  const arenaId = useContext(ArenaId)

  function getHoursInterval() {
    let interval = ''
    let isNewInterval = true
    hours.forEach((hour, index, arr) => {
      if (isNewInterval) {
        interval += `0${hour}:00-`.slice(-6)
        isNewInterval = false
      }
      if (arr[index + 1] - 1 !== hour) {
        interval += `0${hour + 1}:00`.slice(-5)
        interval += '; '
        isNewInterval = true
      }
    })

    return interval
  }

  function checkRight() {
    if (!hours.length) {
      setError(true)
    } else {
      setError(false)
      const formatDate = date.toLocaleDateString().toString().replace(/\./g, '_')
      const interval = [...rentedHours, ...hours]
      rentInterval(arenaId, formatDate, interval)
      setHours([])
    }
  }

  return (
    <div className={styles.rented_info}>
      <div className={styles.checkboxes}>
        <p className={styles.checkbox_info}><span className={styles.checkbox_rented}/> - арендован</p>
        <p className={styles.checkbox_info}><span className={styles.checkbox_unbooked}/> - не арендован</p>
        <p className={styles.checkbox_info}><span className={styles.checkbox_booked}/> - выбрано</p>
      </div>
      <span className={styles.booked_date}>
                <strong>Дата аренды: </strong>
        {`${date.getDate()} ${date.toLocaleString('ru', {month: 'long'})} ${date.getFullYear()}`}
              </span>
      <span className={styles.booked_hours}>
                <strong>Время аренды: </strong>
        {getHoursInterval() || 'Не выбрано'}
              </span>
      <button
        onClick={checkRight}
        className={styles.rented_button}
      >
        {
          rentIntervalLoading
            ? <Loader width={20} height={20} />
            : 'Арендовать'
        }
      </button>
      {
        error
          ? <span className={styles.rented_error}>
                      Пожалуйста, выберите время аренды
                    </span>
          : null
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    rentedHours: state.arena.rentedHours,
    rentIntervalLoading: state.arena.rentIntervalLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    rentInterval: (arenaId, day, interval) => dispatch(rentIntervalAction(arenaId, day, interval))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RentedInfo)
