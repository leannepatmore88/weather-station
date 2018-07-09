import WeatherStationAPI from "../api/WeatherStationAPI";

const GraphDisplayActions = {
  GET_GRAPH_DISPLAY_DATA: "graphDisplay/GET_GRAPH_DISPLAY_DATA",
  GET_GRAPH_DISPLAY_DATA_SUCCESS: "graphDisplay/GET_GRAPH_DISPLAY_DATA_SUCCESS",

  getGraphDisplayData() {
    return dispatch => {
      dispatch({
        type: this.GET_GRAPH_DISPLAY_DATA
      });

      return WeatherStationAPI.fetchweatherData().then(response => {
        dispatch(this._getGraphDisplayDataSuccess(response));
      });
    };
  },

  _getGraphDisplayDataSuccess(response) {
    return {
      type: this.GET_GRAPH_DISPLAY_DATA_SUCCESS,
      payload: {
        response
      }
    };
  }
};

export default GraphDisplayActions;
