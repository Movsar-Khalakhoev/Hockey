import {combineReducers} from 'redux'
import NavbarReducer from './Navbar'
import ArenasReducer from './Arenas'

export default combineReducers({
  navbar: NavbarReducer,
  arenas: ArenasReducer
})