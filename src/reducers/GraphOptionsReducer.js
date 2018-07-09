import GraphOptionsActions from "../actions/GraphOptionsActions";

const initialState = {
  dataToDisplay: [],
  yearMax: null,
  yearMin: null
};

export default function graphOptionsReducer(state = initialState, action) {
  switch (action.type) {
    case GraphOptionsActions.UPDATE_GRAPH_OPTIONS:
      return {
        ...state,
        dataToDisplay: action.payload.options.dataToDisplay,
        yearMax: action.payload.options.yearMax,
        yearMin: action.payload.options.yearMin
      };
    default:
      return state;
  }
}
