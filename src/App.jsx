import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import MonthView from "./pages/MonthView";
import WeekView from "./pages/WeekView";
import DayView from "./pages/DayView";

import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {

  const location = useLocation();

  const hideHeader = location.pathname === "/" || location.pathname === "/forgot";

  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/month" element={<MonthView />} />
        <Route path="/week" element={<WeekView />} />
        <Route path="/day" element={<DayView />} />
      </Routes>

      {!hideHeader && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;