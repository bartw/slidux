import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import slidux from '../reducers';

const store = createStore(slidux, applyMiddleware(thunk));

export default store;