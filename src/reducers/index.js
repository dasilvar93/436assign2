import { combineReducers } from 'redux';
import {
    ADD,
    CLEAR,
    LIST
}from '../actions'

function list(state = [], action){
    switch(action.type){
        case ADD:
            return [...state, action.text];
        case LIST:
            return action.data;
        case CLEAR:
            return [];
        default: 
            return state;
    }    
}

const listApp = combineReducers({list});

export default listApp