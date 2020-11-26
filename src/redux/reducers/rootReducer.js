import {combineReducers} from 'redux'
import NavbarReducer from './Navbar'
import ArenasReducer from './Arenas'
import ArenaReducer from './Arena'
import SpareBenchReducer from './SpareBench'

export default combineReducers({
  navbar: NavbarReducer,
  arenas: ArenasReducer,
  arena: ArenaReducer,
  spareBench: SpareBenchReducer
})