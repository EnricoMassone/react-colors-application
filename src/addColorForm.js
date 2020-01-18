import React from "react";
import PropTypes from "prop-types";

const AddColorForm = ({ onColorAdded }) => {
  return (
    <form className="add-color-form">
      <input type="text" placeholder="Color title..." required />
      <input type="color" required />
      <button type="submit">ADD</button>
    </form>
  );
};

AddColorForm.propTypes = {
  onColorAdded: PropTypes.func.isRequired
};

export default AddColorForm;
