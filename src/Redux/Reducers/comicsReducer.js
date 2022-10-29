import axios from "axios";
import {API_KEY, BASED_COMICS_URL} from '../../Constants/index';

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


export const addComicsTC = (limit) => {
return async (dispatch) => {
    axios(`${BASED_COMICS_URL}?limit=${limit}&${API_KEY}`)
    .then(response => dispatch(addComicsAC(response.data.data.results)))
 }
}
// 'https://gateway.marvel.com:443/v1/public/comics?limit=9&offset=8&apikey=94b30508a0929f4a8b725626690df443
export const addMoreComicsTC = (limit,offset) => {
    return async (dispatch) => {
        axios(`${BASED_COMICS_URL}?limit=${limit}&offset=${offset}&${API_KEY}}`)
        .then(response => dispatch(addComicsAC(response.data.data.results)))
     }
    }
