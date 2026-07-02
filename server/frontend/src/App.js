import LoginPanel from "./components/Login/Login";
import Register from "./components/Register/Register"; // 1. Import the new component
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      {/* 2. Add the route for the register page */}
      <Route path="/register" element={<Register />} /> 
    </Routes>
  );
}

export default App;