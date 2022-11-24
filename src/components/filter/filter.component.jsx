import React from "react";

export const FilterComponent = ({ handleChange }) => {
  return (
    <div class="input-group input-group-sm mb-3">
      <input
        type="text"
        className="form-control glassBox"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        onChange={handleChange}
      />
    </div>
  );
};
