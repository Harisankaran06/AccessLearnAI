import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Lesson from "./pages/Lesson";
import Heart from "./pages/Heart";
import Blind from "./pages/Blind";
import Hearing from "./pages/Hearing";
import AITutor from "./pages/AITutor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/blind" element={<Blind />} />
        <Route path="/hearing" element={<Hearing />} />
        <Route path="/ai" element={<AITutor />} />
      </Routes>
    </Router>
  );
}

export default App;