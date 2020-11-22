import React from 'react'
import styles from './RentedHours.module.sass'
import {connect} from 'react-redux'
import Loader from '../../../../../../UI/Loader/Loader'

const RentedHours = ({rentedHours, scheduleLoading, hours, setHours}) => {
  const rented = new Array(24).fill('').map((_, i) => i)

  function changeBookedHoursState(index) {
    hours.includes(index)
      ? setHours([...hours.filter(hour => hour !== index)].sort((a, b) => a - b))
      : setHours([...hours, index].sort((a, b) => a - b))
  }

  return (
    <div className={styles.rented_hours}>
      {
        scheduleLoading
          ? <Loader width={80} height={80} />
          : rented.map((hour, index) => {
            let rentedHour = false
            let checkboxColor = 'rgb(227,38,54)'
            if (rentedHours.includes(index)) {
              rentedHour = true
              checkboxColor = 'rgb(71,167,106)'
            }

            let booked = false
            if (hours.includes(index)) {
              booked = true
            }
            return <span
              key={index}
              className={styles.hour_container}
            >
                <input
                  style={{color: checkboxColor}}
                  onChange={() => changeBookedHoursState(index)}
                  disabled={rentedHour}
                  checked={rentedHour || booked}
                  className={styles.hour}
                  type='checkbox'
                  id={index}
                />
                <span className={styles.hour_span}/>
                <label className={styles.hour_label} htmlFor={index}>
                </label>
                <small className={styles.hour_interval}>{`${index}:00`}<hr/>{`${index + 1}:00`}</small>
              </span>
          })
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    rentedHours: state.arena.rentedHours,
    scheduleLoading: state.arena.scheduleLoading
  }
}

export default connect(mapStateToProps)(RentedHours)
