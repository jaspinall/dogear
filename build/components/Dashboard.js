import React from 'react';

const Dashboard = (props) => {
  return (
    <div id="dashboard">
      <h1>overview</h1>
      <div id="dashStats">
        <div className="stat">total books read: <span className="val">27</span></div>
        <div className="stat">books in progress: <span className="val">2</span></div>
        <div className="stat">average books per month: <span className="val">1.5</span></div>
        <div className="stat">average pages per day: <span className="val">30</span></div>
      </div>
    </div>
  )
}

export default Dashboard;
