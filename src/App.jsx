import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import HomePage from './pages/HomePage';
import SegmentPage from './pages/SegmentPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/segments" element={<SegmentPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
