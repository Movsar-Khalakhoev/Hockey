import React from 'react'
import styles from './ArenaMap.module.sass'
import {Placemark, Map, YMaps} from 'react-yandex-maps'
import {connect} from 'react-redux'

const ArenaMap = ({coordinates}) => {
  return (
    <div className={styles.map} id='map'>
      <YMaps>
        <Map
          defaultState={{ center: [+coordinates[0], +coordinates[1]], zoom: 15 }}
          width='100%'
          height='400px'>
          <Placemark geometry={[+coordinates[0], +coordinates[1]]} />
        </Map>
      </YMaps>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    coordinates: state.arena.coordinates
  }
}


export default connect(mapStateToProps)(ArenaMap)
