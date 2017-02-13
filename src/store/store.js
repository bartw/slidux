import { createStore } from 'redux';
import slidux from '../reducers';

const store = createStore(slidux);

export default store;