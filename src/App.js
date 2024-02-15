import { Provider } from 'react-redux';
import React from 'react';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/DashboardPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';

function App() {
  
  return (
    <>
      
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/LoginPage" element={LoginPage} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/" element={<LoginPage/>} />
              
              

             
            </Routes>
          </Router>
        </Provider>
      
      
    </>
  );
}

export default App;
