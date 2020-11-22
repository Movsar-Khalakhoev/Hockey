import React, {useContext, useEffect, useState} from 'react'
import styles from './Rental.module.sass'
import DatePicker from 'react-date-picker'
import {connect} from 'react-redux'
import {getScheduleAction} from '../../../../../redux/actions/Arena'
import RentedHours from './RentedHours/RentedHours'
import RentedInfo from './RentedInfo/RentedInfo'
import {ArenaId} from '../Arena'

const Rental = ({changeRentedDay}) => {
  const [date, setDate] = useState(new Date())
  const [hours, setHours] = useState([])
  const arenaId = useContext(ArenaId)
  function updateSchedule(newDate, initialLoading = null) {
    if (newDate.toLocaleDateString() === date.toLocaleDateString() && !initialLoading) return
    const formatDate = newDate.toLocaleDateString().toString().replace(/\./g, '_')
    changeRentedDay(arenaId, formatDate)
    setDate(newDate)
  }

  useEffect(() => {
    const newDate = new Date()
    updateSchedule(newDate, true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.rental}>
      <h2 className={styles.title}>Аренда льда</h2>

      <div className={styles.rented_container}>
        <DatePicker
          className={styles.datepicker}
          onChange={date => updateSchedule(date)}
          value={date}
          clearIcon={null}
          closeCalendar={false}
        />
        <div className={styles.rented}>
          <RentedHours
            hours={hours}
            setHours={setHours}
          />
          <RentedInfo
            date={date}
            hours={hours}
            setHours={setHours}
          />
        </div>
      </div>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    changeRentedDay: (arenaId, day) => dispatch(getScheduleAction(arenaId, day)),
  }
}

export default connect(null, mapDispatchToProps)(Rental)
