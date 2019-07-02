export const ADD = 'ADD';
export const CLEAR = 'CLEAR';
export const LIST = 'LIST';

export function addToList(text){
    return {
        type: ADD,
        text
    }
}

export function replaceList(data){
    return {
        type: LIST,
        data
    }
}

export function clearList(clear){
    return {
        type: CLEAR,
        clear
    }
}