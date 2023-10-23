import { initialSettings } from "./initialState.js";
import { UPDATE } from "./types.js";

export const SettingsReducers = (state = initialSettings , {type,payload}) => {
    switch (type) {
        case UPDATE:
            state = {...state , ...payload}
            return state;
        default:
        return state
    }
}