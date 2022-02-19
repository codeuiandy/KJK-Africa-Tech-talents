import React from "react";
import "./input.css";

export const Input = ({ type, label, placeholder, onChange }) => {
  return (
    <div className="input-wrap">
      {label ? <label>{label}</label> : null}
      <input
        type={type ? type : "text"}
        placeholder={placeholder ? placeholder : ""}
        onChange={onChange}
      />
    </div>
  );
};

export const Select = ({ options, label, placeholder, onChange }) => {
  return (
    <div className="input-wrap">
      {label ? <label>{label}</label> : null}
      <select onChange={onChange}>
        <option value="">{placeholder}</option>
        {options
          ? options.map((val) => {
              return <option>{val}</option>;
            })
          : []}
      </select>
    </div>
  );
};
