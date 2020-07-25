import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  let strClassNames = "form-control form-control-md";
  let feedbackText = null;

  if (!props.error) {
    strClassNames = strClassNames.concat(" is-invalid");
    feedbackText = (
      <div className="invalid-feedback">Kindly fill right data</div>
    );
  }

  return (
    <div className="form-group">
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        className={strClassNames}
        placeholder={props.placeholder}
        onChange={props.onChangeInput}
        defaultValue={props.defaultValue}
      />
      {feedbackText}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  //onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: "text",
};

export default Input;
