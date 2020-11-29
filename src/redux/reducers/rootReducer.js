import {combineReducers} from 'redux'
import NavbarReducer from './Navbar'
import ArenaReducer from './Arena'
import FilterContainerReducer from './FilterContainer'

export default combineReducers({
  navbar: NavbarReducer,
  arena: ArenaReducer,
  filterContainer: FilterContainerReducer
})