import { legacy_createStore as createStore } from 'redux';
import rootReducer from './rootReducer';

import { composeWithDevTools } from 'redux-devtools-extension';
const appStore = createStore(rootReducer,composeWithDevTools());

export default appStore