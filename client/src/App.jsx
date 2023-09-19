import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import LandingPg from './pages/Landing/LandingPg';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {/* UNPROTECTED ROUTES */}
          <Route path="/" element={<LandingPg />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* PROTECTED ROUTES */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;