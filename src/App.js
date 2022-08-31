import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import TodoList from './component/TodoList';


import Footer from './component/Footer';
import Navbar from './component/Navbar';

function App() {
  return (
    <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<TodoList />} />
          </Routes>
          
        </div>
        <Footer />
      </Router>
  );
}

export default App;