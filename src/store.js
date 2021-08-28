import {applyMiddleware, combineReducers, createStore} from "redux";
import homeReducer from "./views/home/redux/homeReducer";
import createSagaMiddleware from "redux-saga";
import homeSaga from "./views/home/redux/homeSaga";
import {spawn} from "@redux-saga/core/effects";

//create root reducer
let rootReducer = combineReducers({
    homeReducer,
});

//create saga middleware
const sagaMiddleware = createSagaMiddleware();

//create redux store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

//create root saga
function* rootSaga() {
    yield spawn(homeSaga);
}

//run saga middleware
sagaMiddleware.run(rootSaga);

export default store;
