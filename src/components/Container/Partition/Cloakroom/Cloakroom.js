import React from 'react'
import styles from './Cloakroom.module.sass'
import ItemsContainerFilter from '../../../../UI/ItemsContainerFilter/ItemsContainerFilter'
import {connect} from 'react-redux'
import ContainerInner from './ContainerInner/ContainerInner'

const Cloakroom = ({filtersList}) => {

  return (
    <div className={styles.cloakroom}>
      <ItemsContainerFilter
        contentClass={styles.content}
        filterAttrs={{
          isOverlay: true,
          selectFiltersList: [
            {
              renderPath: '/app/cloakroom',
              filters: filtersList,
              getDataPath: 'cloakroom_commands'
            }
          ],
          activeFilters: []
        }}
      >
        <ContainerInner />
      </ItemsContainerFilter>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    filtersList: state.filterContainer.cloakroom_commandsFiltersList
  }
}

export default connect(mapStateToProps)(Cloakroom)