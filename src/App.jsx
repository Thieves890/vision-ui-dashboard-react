// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import DashboardLayout from './layouts/DashboardLayout';
import HomePage from './pages/HomePage';
import BelongingsPage from './pages/BelongingsPage';
import MissionsPage from './pages/MissionsPage';
import OffersPage from './pages/OffersPage';
import RewardsPage from './pages/RewardsPage';
import SettingsPage from './pages/SettingsPage';

function Protected({ children }) {
  const user = supabase.auth.user();
  return user ? children : <Navigate to="/auth" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<Protected><DashboardLayout /></Protected>}>
          <Route index element={<HomePage />} />
          <Route path="belongings" element={<BelongingsPage />} />
          <Route path="missions" element={<MissionsPage />} />
          <Route path="offers" element={<OffersPage />} />
          <Route path="rewards" element={<RewardsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
