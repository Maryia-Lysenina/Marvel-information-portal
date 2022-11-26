import { applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import { charactersReducer } from "./Reducers/charactersReducer";
import { comicsReducer } from "./Reducers/comicsReducer";
import { comicReducer } from "./Reducers/comicReducer";

const rootReducer = combineReducers({
    characters: charactersReducer,
    comics: comicsReducer,
    comic: comicReducer,
})
export const store = createStore(rootReducer,applyMiddleware(thunk))