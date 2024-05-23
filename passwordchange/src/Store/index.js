import { applyMiddleware, combineReducers, createStore } from "redux";
import PasswordChangeReducer from "../Reducer/PasswordChangeReducer";
import {thunk} from 'redux-thunk';
import updatePasswordApi from "../middleware/PasswordChangeApi";


const rootreducer = combineReducers({
    passwordchangereducer : PasswordChangeReducer
})

const store = createStore(
    rootreducer,
    applyMiddleware(thunk,updatePasswordApi)
)
export default store;