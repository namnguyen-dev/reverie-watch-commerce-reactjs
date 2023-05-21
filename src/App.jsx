import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages';
import { NavBar } from './components';

function App() {
  return (
    <div className="relative min-h-screen">
      <Router>
        <NavBar />
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
