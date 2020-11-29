import React from 'react'
import styles from './SpareBench.module.sass'
import Header from './Header/Header'
import {connect} from 'react-redux'
import ItemsContainerFilter from '../../../../UI/ItemsContainerFilter/ItemsContainerFilter'
import ContainerInner from './ContainerInner/ContainerInner'

const SpareBench = ({commandsFiltersList, playersFiltersList}) => {
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
              filters: commandsFiltersList
            },
            {
              renderPath: '/app/spareBench/players',
              getDataPath: 'spareBench_players',
              filters: playersFiltersList
            },
            {
              renderPath: '/app/spareBench',
              filters: [],
              exact: true
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
    commandsFiltersList: state.filterContainer.spareBench_commandsFiltersList,
    playersFiltersList: state.filterContainer.spareBench_playersFiltersList
  }
}

export default connect(mapStateToProps)(SpareBench)