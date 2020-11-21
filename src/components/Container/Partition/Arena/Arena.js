import React, {useEffect, useState} from 'react'
import DatePicker from 'react-date-picker'
import styles from './Arena.module.sass'
import ImagesSlider from '../../../../UI/ImagesSlider/ImagesSlider'
import {connect} from 'react-redux'
import instagram from '../../../../img/social/instagram.png'
import vk from '../../../../img/social/vk.png'
import telegram from '../../../../img/social/telegram.png'
import youtube from '../../../../img/social/youtube.png'
import {YMaps, Map, Placemark} from 'react-yandex-maps'
import {getScheduleAction, rentIntervalAction} from '../../../../redux/actions/Arena'
import {Link} from 'react-router-dom'

const Arena = ({arena, rentedHours, childrenCommands, changeRentedDay, rentInterval, match}) => {
  const socialImages = {instagram, vk, telegram, youtube}
  const rented = new Array(24).fill('').map((_, i) => i)
  const [hours, setHours] = useState([])
  const [date, setDate] = useState(new Date())
  const [error, setError] = useState(false)
  const arenaId = match.params.id

  function changeBookedHoursState(index) {
    hours.includes(index)
      ? setHours([...hours.filter(hour => hour !== index)].sort((a, b) => a - b))
      : setHours([...hours, index].sort((a, b) => a - b))
  }

  useEffect(() => {
    const newDate = new Date()
    updateSchedule(newDate, true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

  function updateSchedule(newDate, initialLoading = null) {
    console.log(initialLoading)
    if (newDate.toLocaleDateString() === date.toLocaleDateString() && !initialLoading) return
    const formatDate = newDate.toLocaleDateString().toString().replace(/\./g, '_')
    changeRentedDay(arenaId, formatDate)
    setDate(newDate)
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
    <div className={styles.arena_container}>
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

      <div className={styles.map}>
        <YMaps>
          <Map
            defaultState={{ center: [+arena.coordinates[0], +arena.coordinates[1]], zoom: 15 }}
            width='100%'
            height='100%'>
            <Placemark geometry={[+arena.coordinates[0], +arena.coordinates[1]]} />
          </Map>
        </YMaps>
      </div>

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
            <div className={styles.rented_hours}>
              {
                arena.scheduleLoading
                ? <div className={styles.center}>
                    <div className={styles.lds_ring}>
                      <div/>
                      <div/>
                      <div/>
                      <div/>
                    </div>
                  </div>
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
                  arena.rentIntervalLoading
                    ? <div className={styles.center}>
                        <div className={styles.lds_ring_small}>
                          <div/>
                          <div/>
                          <div/>
                          <div/>
                        </div>
                      </div>
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
          </div>
        </div>
      </div>

      <div className={styles.children}>
        <h2 className={styles.title}>Список детских команд</h2>
        <div className={styles.commands_list}>
          {
            childrenCommands.map((command, index) => {
              return <div key={index} className={styles.command_card}>
                <div className={styles.command_image_container}>
                  <img className={styles.command_image} src={command.image} alt={command.name}/>
                </div>
                <Link className={styles.command_info} to={`/app/commands/childs/${index}`} >
                  <h3 className={styles.command_name}>{command.name}</h3>
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
                </Link>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    arena: state.arena,
    rentedHours: state.arena.rentedHours,
    childrenCommands: state.arena.childrenCommands
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeRentedDay: (arenaId, day) => dispatch(getScheduleAction(arenaId, day)),
    rentInterval: (arenaId, day, interval) => dispatch(rentIntervalAction(arenaId, day, interval))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Arena)