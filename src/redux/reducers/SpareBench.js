import {
  GET_SPARE_BENCH_ERROR,
  GET_SPARE_BENCH_START,
  GET_SPARE_BENCH_SUCCESS
} from '../actions/actionTypes'

const initialState = {
  commands: [],
  players: [],
  commandFiltersList: [
    { value: 'city', label: 'Город' },
    { value: 'name', label: 'Название' },
    { value: 'player_position', label: 'Позиция игрока' }
  ],
  playerFiltersList: [
    { value: 'name', label: 'Имя Фамилия' },
    { value: 'city', label: 'Возраст' },
    { value: 'player_position', label: 'Позиция игрока' }
  ],
  loading: false,
  error: null
}

export default function SpareBenchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SPARE_BENCH_START:
      return {
        ...state,
        loading: true
      }
    case GET_SPARE_BENCH_SUCCESS:
      return {
        ...state,
        [action.mode]: action.items,
        loading: false
      }
    case GET_SPARE_BENCH_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default:
      return state
  }
}