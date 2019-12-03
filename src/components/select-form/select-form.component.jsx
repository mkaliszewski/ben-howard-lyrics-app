import React from "react";
import "./select-form.styles.scss";
const SelectForm = ({
  label,
  guitarTypes,
  handleSubmit,
  handleSelectChange,
  value
}) => {
  return (
    <div className="selectform">
      <div className="selectform__form-div">
        <form
          className="selectform__form"
          onSubmit={handleSubmit}
          value={value}
        >
          <select className="selectform__select" onChange={handleSelectChange}>
            {guitarTypes.map(type => (
              <option className="selectform__option" value={type}>
                {type.toUpperCase()}
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
};

export default SelectForm;
