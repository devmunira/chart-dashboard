import React from "react"
import ReactDOM  from "react-dom"
import App from "./App"
import './index.css'
import { Provider } from "react-redux"
import { persistor, store } from "./store/store.js"
import { PersistGate } from "redux-persist/integration/react"

ReactDOM.render(
    <Provider store={store} >
        <PersistGate persistor={persistor}>
            <App/> 
        </PersistGate>
    </Provider >
, document.getElementById('root'))