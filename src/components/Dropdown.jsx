import React from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const renderedOptions = options.map((option) => {
    /*prevent currently selected dropdown item from rendering*/
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label htmlFor="" className="label">
          Select a color
        </label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">
            Current selected item is : {selected.label}
          </div>
          <div className="menu visible transition">{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
