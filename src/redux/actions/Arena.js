import {
  GET_SCHEDULE_ERROR,
  GET_SCHEDULE_START,
  GET_SCHEDULE_SUCCESS, RENT_INTERVAL_ERROR,
  RENT_INTERVAL_START,
  RENT_INTERVAL_SUCCESS
} from './actionTypes'
import axios from '../../axios/axios'

export function getScheduleAction(arenaId, day) {
  return async dispatch => {
    dispatch(getScheduleStart())
    try {
      const response = await axios.get(`/rentedHours/${arenaId}/${day}/hours.json`)
      dispatch(getScheduleSuccess(response.data || []))
    } catch (e) {
      dispatch(getScheduleError(e))
    }
  }
}

export function getScheduleStart() {
  return {
    type: GET_SCHEDULE_START
  }
}

export function getScheduleSuccess(schedule) {
  return {
    type: GET_SCHEDULE_SUCCESS,
    schedule
  }
}

export function getScheduleError(e) {
  return {
    type: GET_SCHEDULE_ERROR,
    e
  }
}

export function rentIntervalAction(arenaId, day, interval) {
  return async dispatch => {
    dispatch(rentIntervalStart())
    const hoursObj = {
      hours: interval
    }
    try {
      await axios.patch(`/rentedHours/${arenaId}/${day}.json`, hoursObj)
      dispatch(rentIntervalSuccess(interval))
    } catch (e) {
      dispatch(rentIntervalError(e))
    }
  }
}

export function rentIntervalStart() {
  return {
    type: RENT_INTERVAL_START,
  }
}

export function rentIntervalSuccess(interval) {
  return {
    type: RENT_INTERVAL_SUCCESS,
    interval
  }
}

export function rentIntervalError(e) {
  return {
    type: RENT_INTERVAL_ERROR,
    e
  }
}