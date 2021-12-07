import './App.css';
import Home from './pages/Home/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Login from './pages/Login/Login';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Lunch from './pages/Foods/Lunch';
import BreakFast from './pages/Foods/BreakFast';
import Dinner from './pages/Foods/Dinner';


function App() {
  return (
    <div >
      <Routes>

        <Route path="/" element={<Home />}>
          <Route index element={<BreakFast />} />
          <Route path="/breakfast" element={<BreakFast />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/dinner" element={<Dinner />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </div>
  );
}

export default App;
