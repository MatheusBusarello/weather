import { Routes, Route } from 'react-router-dom';

import { Search } from '../pages/Search';
import { Dashboard } from '../pages/Dashboard';
import { Favorites } from '../pages/Favorites';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/:cityName" element={<Dashboard />} /> {/* Permite acessar uma cidade específica */}
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}