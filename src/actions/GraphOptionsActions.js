const GraphOptionsActions = {
  UPDATE_GRAPH_OPTIONS: "graphOptions/UPDATE_GRAPH_OPTIONS",

  updateOptions(options) {
    return {
      type: this.UPDATE_GRAPH_OPTIONS,
      payload: {
        options: options
      }
    };
  }
};

export default GraphOptionsActions;
