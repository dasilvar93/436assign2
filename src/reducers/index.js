import { combineReducers } from 'redux';
import {
    ADD,
    CLEAR
}from '../actions'

const initialState = []

function list(state = initialState, action){
    switch(action.type){
        case ADD:
            return Object.assign( {}, state, {
                list: [
                    ...state.list,   //is ... needed?
                    {
                        text: action.payload, 
                    }
                ]
            })
        case CLEAR:
            return initialState
        default: 
            return state
    }    
}

const listApp = combineReducers({
    list
})

export default listApp