import {
  GET_FILTER_CONTAINER_ERROR,
  GET_FILTER_CONTAINER_START,
  GET_FILTER_CONTAINER_SUCCESS
} from '../actions/actionTypes'

const initialState = {
  spareBench_commands: [],
  spareBench_players: [],
  spareBench_commandsFiltersList: [
    { value: 'city', label: 'Город' },
    { value: 'name', label: 'Название' },
    { value: 'player_position', label: 'Позиция игрока' }
  ],
  spareBench_playersFiltersList: [
    { value: 'name', label: 'Имя Фамилия' },
    { value: 'city', label: 'Возраст' },
    { value: 'player_position', label: 'Позиция игрока' }
  ],

  cloakroom_commands: [],
  cloakroom_commandsFiltersList: [
    { value: 'city', label: 'Горasdfasdfод' },
    { value: 'name', label: 'Наadsfasзвание' },
    { value: 'player_position', label: 'Позицияasdfasd игрока' }
  ],
  arenas_arenas: [],
  arenas_arenasFiltersList: [
    { value: 'city', label: 'Горasdfasdfод' },
    { value: 'name', label: 'Наadsfasзвание' },
    { value: 'player_position', label: 'Позицияasdfasd игрока' }
  ],
  loading: false,
  error: null
}

export default function FilterContainerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FILTER_CONTAINER_START:
      return {
        ...state,
        loading: true
      }
    case GET_FILTER_CONTAINER_SUCCESS:
      return {
        ...state,
        [action.items_name]: action.items,
        loading: false
      }
    case GET_FILTER_CONTAINER_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default:
      return state
  }
}