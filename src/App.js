import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hangman from "./Hangman";

function App() {
  return (
    // implementing routes to later handle custom game url
    <Routes>
      <Route path="*" element={<Hangman />} />
    </Routes>
  );
}

export default App;
