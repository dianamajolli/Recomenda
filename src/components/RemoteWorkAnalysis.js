import React from 'react';
import { Paper, Typography } from '@mui/material';

function RemoteWorkAnalysis() {
  // Dummy data and logic for demonstration
  const remoteWorkData = {
    employeesRemote: 120,
    totalEmployees: 300,
    satisfactionRate: 80 // in percentage
  };

  return (
    <Paper style={{ padding: '20px' }}>
      <Typography variant="h6">Remote Work Analysis</Typography>
      <Typography variant="body1">Employees Working Remotely: {remoteWorkData.employeesRemote}</Typography>
      <Typography variant="body1">Total Employees: {remoteWorkData.totalEmployees}</Typography>
      <Typography variant="body1">Employee Satisfaction Rate: {remoteWorkData.satisfactionRate}%</Typography>
      {/* Add more analysis, charts or insights here */}
    </Paper>
  );
}

export default RemoteWorkAnalysis;
