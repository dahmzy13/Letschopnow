import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { BusinessSignUp } from './pages/BusinessSignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/business/signup" element={<BusinessSignUp />} />
    </Routes>
  );
}

export default App