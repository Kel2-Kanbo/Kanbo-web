import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Complex from './Pages/Complex';
import Room from './Pages/Room';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <div className='bg-secondary-softblue'>
    {/* <div className="App"> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard-admin" element={<Dashboard />} />
          <Route path="/complex" element={<Complex/>} />
          <Route path="/room" element={<Room />}/>
          {/* <Route exact path="/login" element={<Login />} />
          <Route element={ <PrivateRoute /> }>
            <Route path="/home-admin" element={<Home />} />
          </Route> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
