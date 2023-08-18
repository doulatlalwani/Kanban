import React from 'react';

const SortingOptions = ({ selectedSorting, onSortingChange }) => {
  return (
    <div className="sorting-options">
      <label>
        Sort by:
        <select value={selectedSorting} onChange={onSortingChange}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </label>
    </div>
  );
};

export default SortingOptions;
