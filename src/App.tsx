import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import CardsPage from "./pages/cards";
import CardDetails from "./pages/cards/card-details";
import NotFound from "./pages/not-found";
import Login from "./pages/login";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cards">Cards</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/cards/:id" element={<CardDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
