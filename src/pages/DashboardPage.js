import React from 'react';
import RemoteWorkAnalysis from '../components/RemoteWorkAnalysis';
//import LeaveManagementInsights from '../components/LeaveManagementInsights';
//import EmployeeWellBeing from '../components/EmployeeWellBeing';
//import PerformanceMetrics from '../components/PerformanceMetrics';
//import TrainingDevelopment from '../components/TrainingDevelopment';
//import CompensationBenefits from '../components/CompensationBenefits';
//import RecruitmentStaffing from '../components/RecruitmentStaffing';
import { Grid } from '@mui/material';

function Dashboard() {
  return (
    <div style={{ margin: '20px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <RemoteWorkAnalysis />
        </Grid>
        <Grid item xs={12} md={6}>
          <LeaveManagementInsights />
        </Grid>
        <Grid item xs={12} md={6}>
          <EmployeeWellBeing />
        </Grid>
        <Grid item xs={12} md={6}>
          <PerformanceMetrics />
        </Grid>
        <Grid item xs={12} md={6}>
          <TrainingDevelopment />
        </Grid>
        <Grid item xs={12} md={6}>
          <CompensationBenefits />
        </Grid>
        <Grid item xs={12}>
          <RecruitmentStaffing />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
