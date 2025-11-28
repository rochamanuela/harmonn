import React from "react";
import "./Input.css";

export default function Input ({ type = "text", placeholder, value, onChange, required }) {
  return (
    <div className="input-container">
      <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};
