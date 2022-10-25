const initState = {
    name: '',
    thumbnail: {
        path: '',
        extension: ''
    },
    urls: [
        {type:'', url: ''},
        {type:'', url: ''},
        {type:'', url: ''}
    ],
    comics: {
      items: [
        {name: ''}
      ],
    },
};

export const charactersReducer = (action, state = initState) => {
    switch (action.type){
        default: return state;
        case 'ADD_CHARACTERS': {
            return state = action.payload
        }
    }
}

export const characterssAC = (payload) => {
    return {
        type: 'ADD_CHARACTERS',
        payload,
    }
}