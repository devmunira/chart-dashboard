import {layouts} from "./initialState.js"
import { UPDATECOUNT, UPDATELAYOUT, UPDATETYPE } from "./type.js";


export const LayoutReducer = (state = layouts, { type, payload }) => {
  switch (type) {
    case UPDATELAYOUT:
      return {
        ...state,
        layouts : [...payload],
      };

    case UPDATETYPE:
      return {
        ...state,
        compactionType : payload,
      };

    case UPDATECOUNT:
      return {
        ...state,
        counts : state.counts + payload,
      };

    default:
      return state;
  }
}
