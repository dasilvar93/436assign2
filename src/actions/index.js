export const ADD = 'ADD'
export const CLEAR = 'CLEAR'

export function addToList(text){
    return {
        type: ADD,
        text
    }
}

export function clearList(clear){
    return {
        type: CLEAR,
        clear
    }
}