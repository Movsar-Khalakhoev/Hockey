import React from 'react'
import Container from './components/Container/Container'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route path='/app' component={Container} />
    </div>
  )
}

export default App
