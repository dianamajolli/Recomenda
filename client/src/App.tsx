import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Homepage from './pages/HomePage';
import RemoteWorkPage from './pages/RemoteWorkPage'; 
import LoginPage from './pages/LoginPage';
import PerformancePage from './pages/PerformancePage'; 
import TrainingPage from './pages/TrainingPage';
import CompensationPage from './pages/CompensationPage';

export default function App() {
    return (
        <Router>            
                <Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/Login" element={<LoginPage/>} />
                    <Route path="/Performance" element={<PerformancePage/>} />
                    <Route path="/Training" element={<TrainingPage/>} />
                    <Route path="/Compensation" element={<CompensationPage/>} />
                    <Route path="/RemoteWork" element={<RemoteWorkPage />} />
                </Routes>
        </Router>
    );
}
