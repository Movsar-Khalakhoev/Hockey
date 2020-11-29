import React from 'react'
import styles from './Arenas.module.sass'
import {connect} from 'react-redux'
import ItemsContainerFilter from '../../../../UI/ItemsContainerFilter/ItemsContainerFilter'
import {getFilterContainerAction} from '../../../../redux/actions/FilterContainer'
import ContainerInner from './ContainerInner/ContainerInner'

const Arenas = ({arenas, arenasFiltersList, getArenas}) => {
  return (
    <div
      className={styles.arenas}
    >
      <ItemsContainerFilter
        contentClass={styles.content}
        filterAttrs = {{
          isOverlay: true,
          selectFiltersList: [
            {
              renderPath: '/app/arenas',
              getDataPath: 'arenas_arenas',
              filters: arenasFiltersList
            }
          ],
        }}
      >
        <ContainerInner />
      </ItemsContainerFilter>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    arenas: state.filterContainer.arenas_arenas,
    arenasFiltersList: state.filterContainer.arenas_arenasFiltersList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getArenas: filters => dispatch(getFilterContainerAction(filters, 'arenas_arenas'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Arenas)