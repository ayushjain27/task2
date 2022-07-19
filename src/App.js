import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar';
import Details from './Components/Details';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/details/:id" element={<Details />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
