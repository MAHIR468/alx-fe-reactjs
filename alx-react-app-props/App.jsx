// App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

import Counter from './components/Counter';
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';

import UserContext from './UserContext';
import ProfilePage from './ProfilePage';

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com"
  };

  return (
    <UserContext.Provider value={userData}>
      <Router>
        <div>
          <Header />
          <Navbar />
          <MainContent />
          <UserProfile name="John Smith" age={30} bio="Software engineer who loves travel and tech." />
          <Counter />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <ProfilePage />
          <Footer />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
