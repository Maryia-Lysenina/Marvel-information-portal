import axios from "axios";
const initState = [];


export const comicsReducer = (state = initState, action) => {
    switch (action.type){
        default: return state
        case 'ADD_COMICS': {
            return state = action.payload
        }
    }
}
 
export const addComicsAC = (payload) => {
    return {
        type: 'ADD_COMICS',
        payload,
    }
}


export const addComicsTC = () => {
return async (dispatch) => {
    axios(`https://gateway.marvel.com:443/v1/public/comics?apikey=94b30508a0929f4a8b725626690df443`)
    .then(response => dispatch(addComicsAC(response.data.data.results)))
 }
}
