import "./App.css";
import { Home, Login } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/auth.context";
import { ProtectedRoutes, GuestRoutes } from "./utils/router";

function App() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12 mb-4"></div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<GuestRoutes />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
