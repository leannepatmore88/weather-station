import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import GraphDisplayActions from "../actions/GraphDisplayActions";
import GraphOptionsActions from "../actions/GraphOptionsActions";
import { lineColours } from "../constants/WeatherStationConstants";
import { getWeatherData } from "../selectors/GraphDisplaySelectors";
import {
  getDataToDisplay,
  getYearMax,
  getYearMin
} from "../selectors/GraphOptionsSelectors";

import "../styles/graphDisplay.css";

class GraphDisplay extends Component {
  constructor(props) {
    super(props);

    this.props.getGraphDisplayData();
  }

  render() {
    const { dataToDisplay, weatherData, yearMax, yearMin } = this.props;

    let data = null;
    if (weatherData) {
      data = weatherData.filter(
        dataEntry => yearMin <= dataEntry.yyyy && dataEntry.yyyy <= yearMax
      );
    }

    if (!data || !data.length || !dataToDisplay.length) {
      return <div>NO DATA TO DISPLAY</div>;
    }

    const lineComponents = dataToDisplay.map((data, index) => {
      return (
        <Line
          key={data}
          type="monotone"
          dataKey={data}
          stroke={lineColours[index]}
        />
      );
    });

    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
          data={data}
        >
          <XAxis dataKey="yyyy" />
          <YAxis />
          <Tooltip />
          <Legend />
          {lineComponents}
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    dataToDisplay: getDataToDisplay(state),
    weatherData: getWeatherData(state),
    yearMax: getYearMax(state),
    yearMin: getYearMin(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGraphDisplayData: () =>
      dispatch(GraphDisplayActions.getGraphDisplayData()),
    updateOptions: () => dispatch(GraphOptionsActions.updateOptions())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphDisplay);
