import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [groupedTickets, setGroupedTickets] = useState({});

  useEffect(() => {
    // Fetch data from the API and update the `tickets` state
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => {
        setTickets(data.tickets);
      });
  }, []);

  useEffect(() => {
    // Group tickets based on the selected `groupingOption`
    if (groupingOption === 'status') {
      groupByStatus();
    } else if (groupingOption === 'user') {
      groupByUser();
    } else if (groupingOption === 'priority') {
      groupByPriority();
    }
  }, [groupingOption, tickets]);

  const groupByStatus = () => {
    const grouped = tickets.reduce((groups, ticket) => {
      const status = ticket.status;
      if (!groups[status]) {
        groups[status] = [];
      }
      groups[status].push(ticket);
      return groups;
    }, {});
    setGroupedTickets(grouped);
  };

  const groupByUser = () => {
    const grouped = tickets.reduce((groups, ticket) => {
      const user = ticket.user;
      if (!groups[user]) {
        groups[user] = [];
      }
      groups[user].push(ticket);
      return groups;
    }, {});
    setGroupedTickets(grouped);
  };

  const groupByPriority = () => {
    const grouped = tickets.reduce((groups, ticket) => {
      const priority = ticket.priority;
      if (!groups[priority]) {
        groups[priority] = [];
      }
      groups[priority].push(ticket);
      return groups;
    }, {});
    setGroupedTickets(grouped);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kanban Board App</h1>
        <div className="controls">
          <button onClick={() => setGroupingOption('status')}>Group by Status</button>
          <button onClick={() => setGroupingOption('user')}>Group by User</button>
          <button onClick={() => setGroupingOption('priority')}>Group by Priority</button>
        </div>
      </header>
      <main>
        <div className="board">
          {Object.keys(groupedTickets).map((group) => (
            <div key={group} className="group">
              <h2>{group}</h2>
              {groupedTickets[group].map((ticket) => (
                <div key={ticket.id} className="ticket">
                  <h3>{ticket.title}</h3>
                  <p>Status: {ticket.status}</p>
                  <p>Assigned to: {ticket.user}</p>
                  <p>Priority: {ticket.priority}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;