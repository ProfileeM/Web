import React from "react";
import "../assets/css/component/Input.css";

const Input = ({ message, value, onChange }) => {
  return (
    <div className="input-container">
      <p className="message">{message}</p>
      <input
        className="input-frame"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
