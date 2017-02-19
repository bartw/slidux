import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import slidux from '../reducers';

const store = createStore(slidux, undefined, compose(applyMiddleware(thunk), autoRehydrate()));

persistStore(store);

export default store;