import { header0Reducer, missionReducer, solutionReducer } from "./reducers/header0Reducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk'



const reducer =combineReducers({
    header0: header0Reducer,
    mission:missionReducer,
    solution:solutionReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;