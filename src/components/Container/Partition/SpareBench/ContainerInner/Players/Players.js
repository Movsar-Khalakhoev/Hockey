import React, {useEffect} from 'react'
import PeopleCard from '../../../../../../UI/PeopleCard/PeopleCard'
import styles from './Players.module.sass'
import {connect} from 'react-redux'
import {getFilterContainerAction} from '../../../../../../redux/actions/FilterContainer'
import Loader from '../../../../../../UI/Loader/Loader'

const Players = ({players, loading, getPlayers}) => {

  useEffect(() => getPlayers({}), [getPlayers])

  return (
    <>
      {
        loading
          ? <Loader
              width={80}
              height={80}
            />
          : players.length
              ? players.map((item, index) =>
                  <PeopleCard
                    key={index}
                    people={item}
                    requiredMessage='Откликнуться'
                    cardClass={styles.player_card}
                    cardStyle={{
                      width: '32%',
                      marginRight: '1%',
                      marginTop: 10
                    }}
                  />)
              : <p className='nothing'>Ничего не найдено</p>
      }
    </>
  )
}

function mapStateToProps(state) {
  return {
    players: state.filterContainer.spareBench_players,
    loading: state.filterContainer.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPlayers: filters => dispatch(getFilterContainerAction(filters, 'spareBench_players'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Players)