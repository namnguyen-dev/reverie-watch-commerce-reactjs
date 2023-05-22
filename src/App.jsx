import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, SingleProductPage, CartPage } from './pages';
import { Footer, NavBar } from './components';

function App() {
  return (
    <div className="relative min-h-screen">
      <Router>
        <NavBar />
        <main className="min-h-screen">
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/cart" element={<CartPage />}></Route>
            <Route
              exact
              path="/products/:id"
              element={<SingleProductPage />}
            ></Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
