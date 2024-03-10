import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';
import RemoteWorkPage from './pages/RemoteWorkPage';
import LoginPage from './pages/LoginPage';
import PerformancePage from './pages/PerformancePage';
import TrainingPage from './pages/TrainingPage';
import CompensationPage from './pages/CompensationPage';
import RecruitmentPage from './pages/RecruitmentPage';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<ProtectedRoute><Homepage /></ProtectedRoute>} />
                    <Route path="/Login" element={<LoginPage />} />
                    <Route path="/Performance" element={<ProtectedRoute><PerformancePage /></ProtectedRoute>} />
                    <Route path="/Training" element={<ProtectedRoute><TrainingPage /></ProtectedRoute>} />
                    <Route path="/Compensation" element={<ProtectedRoute><CompensationPage /></ProtectedRoute>} />
                    <Route path="/RemoteWork" element={<ProtectedRoute><RemoteWorkPage /></ProtectedRoute>} />
                    <Route path="/Recruitment" element={<ProtectedRoute><RecruitmentPage /></ProtectedRoute>} />
                </Routes>
            </Router>
        </Provider>
    );
}
