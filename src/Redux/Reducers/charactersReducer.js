const initState = [];

export const charactersReducer = ( state = initState, action) => {
    switch (action.type){
        default: return state;
        case 'ADD_CHARACTERS': {
            return action.payload
        }
    }
}

export const charactersAC = (payload) => {
    return {
        type: 'ADD_CHARACTERS',
        payload,
    }
}