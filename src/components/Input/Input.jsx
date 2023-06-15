import PropTypes from "prop-types";

import styles from "./Input.module.scss";

const Input = ({ type, placeholder, onInputChange, value }) => {
  const inputChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    onInputChange(name, value);
  };

  return (
    <input
      className={styles.input}
      required
      onChange={inputChangeHandler}
      type={type}
      placeholder={placeholder}
      name={value}
    />
  );
};

Input.propTypes = { type: PropTypes.string.isRequired };
Input.propTypes = { placeholder: PropTypes.string.isRequired };
Input.propTypes = { value: PropTypes.number.isRequired };
Input.propTypes = { onInputChange: PropTypes.func.isRequired };

export default Input;
