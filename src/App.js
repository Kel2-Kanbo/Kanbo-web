import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import './App.css';

import CreateBuilding from './Components/CreateBuilding';
import Complex from './Pages/Complex';
import Dashboard from './Pages/Dashboard';
import Complex from './Pages/Complex';
import Room from './Pages/Room';
import NotFound from './Pages/NotFound';
import CreateUpdateRoom from './Pages/CreateUpdateRoom';
import Register from './Pages/Register';
import Room from './Pages/Room';

const App = () => {
  return (
    <div>
      {/* <div className="App"> */}
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route exact path="/createRoom" element={<CreateUpdateRoom />} />
          {/* <Route exact path="/login" element={<Login />} />
          <Route element={ <PrivateRoute /> }>
            <Route path="/home-admin" element={<Home />} />
          </Route> */}
          <Route path="/register" element={<Register />} />
          <Route path="/create-building" element={<CreateBuilding />} />
          <Route path="/complex" element={<Complex />} />
          <Route path="/room" element={<Room />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
