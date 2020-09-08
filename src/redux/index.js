import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux';
import createRootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

function configureStore() {
    const store = createStore(
        createRootReducer(),
        composeWithDevTools(applyMiddleware(thunk)),
    );

    return store;
}

export default configureStore();