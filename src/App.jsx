import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages';

function App() {
  return (
    <div className="relative min-h-screen">
      <Router>
        <main className="min-h-screen">
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
