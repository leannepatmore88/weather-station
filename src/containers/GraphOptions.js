import React, { Component } from "react";
import { connect } from "react-redux";
import { Form } from "semantic-ui-react";

import DataDisplaySelection from "../components/DataDisplaySelection";
import DateSelection from "../components/DateSelection";
import GraphOptionsActions from "../actions/GraphOptionsActions";
import { defaultOptions } from "../constants/WeatherStationConstants";

import "../styles/graphOptions.css";

class GraphOptions extends Component {
  constructor(props) {
    super(props);

    this.state = defaultOptions;

    this.props.updateOptions(defaultOptions);
  }

  handleSubmit = () => {
    this.props.updateOptions(this.state);
  };

  onDataDisplayChange = evt => {
    const currentDisplayData = this.state.dataToDisplay;
    const newValue = evt.target.value;

    const newData = currentDisplayData.filter(element => {
      return element !== newValue;
    });

    if (evt.target.checked) newData.push(newValue);

    this.setState({
      ...this.state,
      dataToDisplay: newData
    });
  };

  onMaxDateChange = (evt, { value }) => {
    if (value.length <= 4) {
      this.setState({
        ...this.state,
        yearMax: Number(value)
      });
    }
  };

  onMinDateChange = (evt, { value }) => {
    if (value.length <= 4) {
      this.setState({
        ...this.state,
        yearMin: Number(value)
      });
    }
  };

  render() {
    const { dataToDisplay, yearMax, yearMin } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} className="optionsForm">
        <DateSelection
          onMaxDateChange={this.onMaxDateChange}
          onMinDateChange={this.onMinDateChange}
          yearMax={yearMax}
          yearMin={yearMin}
        />
        <DataDisplaySelection
          dataToDisplay={dataToDisplay}
          possibleOptions={defaultOptions.dataToDisplay}
          onDataDisplayChange={this.onDataDisplayChange}
        />
        <Form.Button color="blue" content="Submit" />
      </Form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateOptions: options =>
      dispatch(GraphOptionsActions.updateOptions(options))
  };
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(null, mapDispatchToProps)(GraphOptions);
