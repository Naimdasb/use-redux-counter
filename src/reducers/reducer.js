import * as actionTypes from '../actions/action'

const initialState = {
    counter: 0
}


function reducer (store = initialState, action) {
    switch(action.type) {
        case actionTypes.ADD:
            return {
                counter: store.counter + action.value
            }
        case actionTypes.SUB:
            return {
                counter: store.counter - action.value
            }
        default:
            return store
    }
}

export default reducer