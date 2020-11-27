import {
  GET_FILTER_CONTAINER_ERROR,
  GET_FILTER_CONTAINER_START,
  GET_FILTER_CONTAINER_SUCCESS
} from './actionTypes'

import axios from 'axios'

export function getFilterContainerAction(filters, path) {
  return async dispatch => {
    dispatch(getFilterContainerStart())
    try {
      // let url = `/spareBench_${mode}?`
      // Object.keys(filters).forEach(filter => {
      //   url += `${filter}=${filters[filter]}&`
      // })
      console.log(path, filters)
      const response = await axios.get(`http://localhost:5000/${path}`)
      dispatch(getFilterContainerSuccess(response.data, path))
    } catch (e) {
      dispatch(getFilterContainerError(e))
    }
  }
}

export function getFilterContainerStart() {
  return {
    type: GET_FILTER_CONTAINER_START
  }
}

export function getFilterContainerSuccess(items, items_name) {
  return {
    type: GET_FILTER_CONTAINER_SUCCESS,
    items_name,
    items
  }
}

export function getFilterContainerError(e) {
  return {
    type: GET_FILTER_CONTAINER_ERROR,
    error: e
  }
}
