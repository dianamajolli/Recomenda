import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Homepage from './pages/HomePage';
import RemoteWorkPage from './pages/RemoteWorkPage'; 
import LoginPage from './pages/LoginPage';
import PerformancePage from './pages/PerformancePage'; 


export default function App() {
    return (
        <Router>
            
                <Routes>
					<Route path="/" element={<Homepage />} />
                    <Route path="/RemoteWork" element={<RemoteWorkPage />} />
					<Route path="/LoginPage" element={<LoginPage/>} />
                    <Route path="/PerformancePage" element={<PerformancePage/>} />
                </Routes>
        </Router>
    );
}
