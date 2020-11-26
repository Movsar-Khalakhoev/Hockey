import React, {useEffect} from 'react'
import CommandCardSmall from '../../../../../../UI/CommandCard.small/CommandCard.small'
import {connect} from 'react-redux'
import Loader from '../../../../../../UI/Loader/Loader'
import {getSpareBenchAction} from '../../../../../../redux/actions/SpareBench'

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
          : commands.map((item, index) =>
            <CommandCardSmall
              key={index}
              index={index}
              command={item}
            />)
      }
    </>
  )
}

function mapStateToProps(state) {
  return {
    commands: state.spareBench.commands,
    loading: state.spareBench.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCommands: filters => dispatch(getSpareBenchAction(filters, 'commands'))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Commands)