import { APP_NAME as appName } from '../../config';
import reduser from './reducer';

export const moduleName = 'site';

export const SET_DATA = `${appName}/${moduleName}/SET_DATA`;
export const SET_CHOSEN_PRODUCT = `${appName}/${moduleName}/SET_CHOSEN_PRODUCT`;
export const SET_STATE_BUTTON = `${appName}/${moduleName}/SET_STATE_BUTTON`;
export const SET_PRICE = `${appName}/${moduleName}/SET_PRICE`;
export const SHOW_SETTING = `${appName}/${moduleName}/SHOW_SETTING`;


export default reduser;