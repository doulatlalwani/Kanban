import React from 'react';

const GroupingOptions = ({ selectedGrouping, onGroupingChange }) => {
  return (
    <div className="grouping-options">
      <label>
        Group by:
        <select value={selectedGrouping} onChange={onGroupingChange}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </label>
    </div>
  );
};

export default GroupingOptions;
