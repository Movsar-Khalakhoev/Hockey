import {
  GET_SPARE_BENCH_ERROR,
  GET_SPARE_BENCH_START,
  GET_SPARE_BENCH_SUCCESS
} from './actionTypes'

import axios from 'axios'

export function getSpareBenchAction(filters, mode) {
  return async dispatch => {
    dispatch(getSpareBenchStart())
    try {
      let url = `/spareBench_${mode}?`
      Object.keys(filters).forEach(filter => {
        url += `${filter}=${filters[filter]}&`
      })
      const response = await axios.get(`http://localhost:5000/spareBench_${mode}`)
      dispatch(getSpareBenchSuccess(response.data, mode))
    } catch (e) {
      dispatch(getSpareBenchError(e))
    }
  }
}

export function getSpareBenchStart() {
  return {
    type: GET_SPARE_BENCH_START
  }
}

export function getSpareBenchSuccess(items, mode) {
  return {
    type: GET_SPARE_BENCH_SUCCESS,
    mode,
    items
  }
}

export function getSpareBenchError(e) {
  return {
    type: GET_SPARE_BENCH_ERROR,
    error: e
  }
}
