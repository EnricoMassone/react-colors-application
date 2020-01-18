import React from "react";
import PropTypes from "prop-types";

const ColorsList = ({ colors }) => <pre>{JSON.stringify(colors, null, 2)}</pre>;

ColorsList.propTypes = {
  colors: PropTypes.array.isRequired
};

export default ColorsList;
