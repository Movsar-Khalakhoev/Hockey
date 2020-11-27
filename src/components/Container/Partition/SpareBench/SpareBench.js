import React from 'react'
import styles from './SpareBench.module.sass'
import Header from './Header/Header'
import {connect} from 'react-redux'
import ItemsContainerFilter from '../../../../UI/ItemsContainerFilter/ItemsContainerFilter'
import ContainerInner from './ContainerInner/ContainerInner'

const SpareBench = ({commandFiltersList, playerFiltersList}) => {
  return (
    <div className={styles.spare_bench}>
      <Header />
      <ItemsContainerFilter
        contentClass={styles.content}
        filterAttrs = {{
          isOverlay: true,
          selectFiltersList: [
            {
              renderPath: '/app/spareBench/commands',
              getDataPath: 'spareBench_commands',
              filters: commandFiltersList
            },
            {
              renderPath: '/app/spareBench/players',
              getDataPath: 'spareBench_players',
              filters: playerFiltersList
            },
            {
              renderPath: '/app/spareBench',
              filters: [],
              exact: true
            }
          ],
        }}
        data_path='spareBench_'
      >
        <ContainerInner />
      </ItemsContainerFilter>
    </div>
  )
}


function mapStateToProps(state) {
  return {
    commandFiltersList: state.filterContainer.spareBench_commandsFiltersList,
    playerFiltersList: state.filterContainer.spareBench_playersFiltersList
  }
}

export default connect(mapStateToProps)(SpareBench)