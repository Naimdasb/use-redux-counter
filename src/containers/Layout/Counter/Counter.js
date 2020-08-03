import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../../actions/action'

class Counter extends Component {
    state = {
        input: 0,
    }

   onChangeHandler = (e) => {
        this.setState({
            input: Number(e.target.value)
        })
    }
    
   



    render() {
        return (
            <>
                <h1>Result is: {this.props.ctr}</h1>
                <h1>Current Value is: {this.state.input}</h1>
                <input type='number' onChange={this.onChangeHandler} />
                <button onClick={() => {this.props.increment(this.state.input)}}>+</button>
                <button onClick={() => {this.props.decrement(this.state.input)}}>-</button>
               
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    ctr: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
    increment: (v) => dispatch({type: actionTypes.ADD, value: v}),
    decrement: (v) => dispatch({type: actionTypes.SUB, value: v})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter)
