import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class DataDisplaySelection extends Component {
  render() {
    const { dataToDisplay, onDataDisplayChange, possibleOptions } = this.props;

    const checkBoxes = possibleOptions.map(option => {
      return (
        <Form.Field
          key={option}
          label={option}
          value={option}
          control="input"
          type="checkbox"
          onChange={onDataDisplayChange}
          checked={dataToDisplay.includes(option)}
        />
      );
    });

    return (
      <Form.Group grouped>
        <label>Data Display Options</label>
        {checkBoxes}
      </Form.Group>
    );
  }
}

export default DataDisplaySelection;
