import "./App.css";
import { Home, Login } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/auth.context";
import { ProtectedRoutes, GuestRoutes } from "./utils/router";

function App() {
  const { loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
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
