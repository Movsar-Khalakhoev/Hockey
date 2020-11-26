import React, {useEffect} from 'react'
import PeopleCard from '../../../../../../UI/PeopleCard/PeopleCard'
import styles from './Players.module.sass'
import {connect} from 'react-redux'
import {getSpareBenchAction} from '../../../../../../redux/actions/SpareBench'
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
          : players.map((item, index) =>
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
      }
    </>
  )
}

function mapStateToProps(state) {
  return {
    players: state.spareBench.players,
    loading: state.spareBench.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPlayers: filters => dispatch(getSpareBenchAction(filters, 'players'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Players)