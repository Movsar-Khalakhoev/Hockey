import {combineReducers} from 'redux'
import NavbarReducer from './Navbar'
import ArenasReducer from './Arenas'
import ArenaReducer from './Arena'
import FilterContainerReducer from './FilterContainer'

export default combineReducers({
  navbar: NavbarReducer,
  arenas: ArenasReducer,
  arena: ArenaReducer,
  filterContainer: FilterContainerReducer
})