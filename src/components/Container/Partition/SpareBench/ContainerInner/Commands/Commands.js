import React, {useEffect} from 'react'
import CommandCardSmall from '../../../../../../UI/CommandCard.small/CommandCard.small'
import {connect} from 'react-redux'
import Loader from '../../../../../../UI/Loader/Loader'
import {getFilterContainerAction} from '../../../../../../redux/actions/FilterContainer'

const Commands = ({getCommands, commands, loading}) => {

  useEffect(() => getCommands({}), [getCommands])

  return (
    <>
      {
        loading
          ? <Loader
              width={80}
              height={80}
            />
          : commands.length
              ? commands.map((item, index) =>
                  <CommandCardSmall
                    key={index}
                    index={index}
                    command={item}
                  />)
              : <p className='nothing'>Ничего не найдено</p>
      }
    </>
  )
}

function mapStateToProps(state) {
  return {
    commands: state.filterContainer.spareBench_commands,
    loading: state.filterContainer.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCommands: filters => dispatch(getFilterContainerAction(filters, 'spareBench_commands'))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Commands)