import { charts } from "./initialState";
import { UPDATE } from "./type";



export const ChartReducer = (state = charts, { type, payload }) => {
  switch (type) {
    case UPDATE:
      return {
        ...state,
        [payload.type] : {...payload.data},
      };

    default:
      return state;
  }
}
