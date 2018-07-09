import GraphDisplayActions from "../actions/GraphDisplayActions";

const initialState = {
  weatherData: null
};

function convertStrings(obj) {
  for (let key in obj) {
    obj[key] = parseFloat(obj[key]);
  }

  return obj;
}

export default function graphDisplayReducer(state = initialState, action) {
  switch (action.type) {
    case GraphDisplayActions.GET_GRAPH_DISPLAY_DATA_SUCCESS:
      return {
        ...state,
        weatherData: action.payload.response.map(obj => {
          return convertStrings(obj);
        })
      };
    default:
      return state;
  }
}
