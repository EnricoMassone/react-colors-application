import React, { createRef } from "react";
import PropTypes from "prop-types";

const AddColorForm = ({ onColorAdded }) => {
  const colorTitleInput = createRef();
  const colorHexCodeInput = createRef();
  const form = createRef();

  const onFormSubmit = e => {
    e.preventDefault();

    form.current.reportValidity();

    onColorAdded(
      colorTitleInput.current.value,
      colorHexCodeInput.current.value
    );
  };

  return (
    <form className="add-color-form" ref={form}>
      <input
        type="text"
        placeholder="Color title..."
        ref={colorTitleInput}
        required
      />
      <input type="color" ref={colorHexCodeInput} required />
      <button type="submit" onClick={onFormSubmit}>
        ADD
      </button>
    </form>
  );
};

AddColorForm.propTypes = {
  onColorAdded: PropTypes.func.isRequired
};

export default AddColorForm;
