import { applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import { charactersReducer } from "./Reducers/charactersReducer";
import { comicsReducer } from "./Reducers/comicsReducer";

const rootReducer = combineReducers({
    characters: charactersReducer,
    comics: comicsReducer,
})
export const store = createStore(rootReducer,applyMiddleware(thunk))