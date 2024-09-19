import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Football from './components/Football';
import Movies from './components/Movies';
import Events from './components/Events';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Logo />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/football" element={<Football />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
