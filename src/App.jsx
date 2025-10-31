import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss'
import Header from './components/header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
