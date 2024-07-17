import { combineReducers } from 'redux';
import avatarReducer from './avatarReducer';

const rootReducer = combineReducers({
    avatar: avatarReducer,
    // Otros reducers pa algun dia no se 
});

export default rootReducer;
