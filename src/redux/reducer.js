import { combineReducers } from 'redux';
import siteReducer, { moduleName as date } from '../ducks/site';

const createRootReducer = () => combineReducers({
	[date]: siteReducer,

});

export default createRootReducer;