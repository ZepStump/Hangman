import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hangman from "./Hangman";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    // implementing routes to later handle custom game url
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Hangman/:customWord?" element={<Hangman />} />
      <Route path="/Leaderboard" element={<Leaderboard />} />
    </Routes>
  );
}

export default App;
