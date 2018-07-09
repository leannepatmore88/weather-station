import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class DateSelection extends Component {
  render() {
    const { onMaxDateChange, onMinDateChange, yearMax, yearMin } = this.props;

    return (
      <Form.Group grouped>
        <label>Year</label>
        <div className="dateInput">
          <Form.Input
            label="From"
            type="number"
            onChange={onMinDateChange}
            value={yearMin}
            fluid
          />
          <Form.Input
            label="To"
            type="number"
            onChange={onMaxDateChange}
            value={yearMax}
            fluid
          />
        </div>
      </Form.Group>
    );
  }
}

export default DateSelection;
