import React, {useEffect} from 'react'
import styles from './ContainerInner.module.sass'
import CommandCardSmall from '../../../../../UI/CommandCard.small/CommandCard.small'
import {getFilterContainerAction} from '../../../../../redux/actions/FilterContainer'
import {connect} from 'react-redux'
import Loader from '../../../../../UI/Loader/Loader'

const ContainerInner = ({commands, getCommands, loading}) => {

  useEffect(() => getCommands({}), [getCommands])

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {
          loading
            ? <Loader width={80} height={80} />
            : commands.length
                ? commands.map((command, index) =>
                    <CommandCardSmall
                      key={index}
                      command={command}
                      index={index}
                    />)
                : <p className='nothing'>Ничего не найдено</p>
        }
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    commands: state.filterContainer.cloakroom_commands,
    loading: state.filterContainer.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCommands: filter => dispatch(getFilterContainerAction(filter, 'cloakroom_commands'))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ContainerInner)