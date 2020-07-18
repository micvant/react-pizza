import {
    createStore
} from 'redux';
import rootReducer from './reducers'
// Расширение для Хрома redux
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;
export default store