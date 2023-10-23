import { applyMiddleware, combineReducers , createStore } from "redux";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk";
import { SettingsReducers } from "./settings/reducer.js";
import { ChartReducer } from "./chart/reducer.js";
import { LayoutReducer } from "./layout/reducer.js";



const combineReducer = combineReducers({
    settings : SettingsReducers,
    charts : ChartReducer,
    layouts : LayoutReducer,
})

const persistConfig = {
    key : 'root',
    storage,
    debounce: 0,   
    throttle: 0,
}


// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, combineReducer);

// Create the Redux store
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)) // for Redux DevTools
);

// Create a persistor object
const persistor = persistStore(store);



export {
    store,
    persistor
};

