import React, {useEffect} from 'react'
import styles from './ContainerInner.module.sass'
import ArenaCard from '../ArenaCard/ArenaCard'
import {getFilterContainerAction} from '../../../../../redux/actions/FilterContainer'
import {connect} from 'react-redux'
import Loader from '../../../../../UI/Loader/Loader'

const ContainerInner = ({arenas, loading, getArenas}) => {
  useEffect(() => getArenas({}), [getArenas])

  return (
    <>
      {
        loading
          ? <Loader
            width={80}
            height={80}
          />
          : arenas.length
          ? <div className={styles.list}>
              {
                arenas.map((arena, index) => {
                  return <ArenaCard key={index} arena={arena} />
                })
              }
            </div>
          : <p className='nothing'>Ничего не найдено</p>
      }
    </>
  )
}

function mapStateToProps(state) {
  return {
    arenas: state.filterContainer.arenas_arenas,
    loading: state.filterContainer.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getArenas: filters => dispatch(getFilterContainerAction(filters, 'arenas_arenas'))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerInner)