import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Column from './Column';
import GroupingOptions from './GroupingOptions';
import SortingOptions from './SortingOptions';

const apiUrl = 'https://api.quicksell.co/v1/internal/frontend-assignment';

const Board = () => {
  const [tickets, setTickets] = useState([]);
  const [selectedGrouping, setSelectedGrouping] = useState('status');
  const [selectedSorting, setSelectedSorting] = useState('priority');

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => setTickets(response.data.tickets))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const groupedTickets = groupTickets(tickets, selectedGrouping);
  const sortedTickets = sortTickets(groupedTickets, selectedSorting);

  const handleGroupingChange = (event) => {
    setSelectedGrouping(event.target.value);
  };

  const handleSortingChange = (event) => {
    setSelectedSorting(event.target.value);
  };

  return (
    <div className="board">
      <GroupingOptions
        selectedGrouping={selectedGrouping}
        onGroupingChange={handleGroupingChange}
      />
      <SortingOptions
        selectedSorting={selectedSorting}
        onSortingChange={handleSortingChange}
      />
      {sortedTickets.map((column, index) => (
        <Column key={index} title={column.title} cards={column.tickets} />
      ))}
    </div>
  );
};

const groupTickets = (tickets, grouping) => {
  // Implement grouping logic here based on the selected grouping option
};

const sortTickets = (groupedTickets, sorting) => {
  // Implement sorting logic here based on the selected sorting option
};

export default Board;
