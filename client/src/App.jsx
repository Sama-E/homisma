import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

//Login + Register
import Login from "./pages/Auth/Login";

import LandingPg from './pages/Landing/LandingPg';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  // const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {/* UNPROTECTED ROUTES */}
            <Route path="/" element={<LandingPg />} />
            <Route path="/login" element={<Login />} />

            {/* PROTECTED ROUTES */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;