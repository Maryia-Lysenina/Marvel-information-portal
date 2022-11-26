import axios from "axios";
import {API_KEY, BASED_COMICS_URL} from '../../Constants/index';

const initState = [];
export const comicReducer = (state = initState, action) => {
    switch (action.type){
        default: return state
        case 'ADD_COMIC': {
            return state = action.payload
        }
    }
}
 
export const addComicAC = (payload) => {
    return {
        type: 'ADD_COMIC',
        payload,
    }
}

export const addComicTC = (id) => {
return async (dispatch) => {
    axios(`${BASED_COMICS_URL}/${id}?&${API_KEY}`)
    .then(response => dispatch(addComicAC(response.data.data.results)))
 }
}
