import { applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import { charactersReducer } from "./Reducers/charactersReducer";

const rootReducer = combineReducers({
// characters: charactersReducer,

})
export const store = createStore(rootReducer,applyMiddleware(thunk))