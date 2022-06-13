import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import CreateBuilding from './Components/CreateBuilding';
import Login from './Pages/Login';
import Complex from './Pages/Complex';
import Dashboard from './Pages/Dashboard';
import Room from './Pages/Room';
import NotFound from './Pages/NotFound';
import CreateUpdateRoom from './Pages/CreateUpdateRoom';
import Register from './Pages/Register';
import Building from './Pages/Building';

function App() {
  return (
    <div>
      {/* <div className="App"> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/complex" element={<Complex />} />
          <Route path="/building" element={<Building />} />
          <Route path="/room" element={<Room />} />
          <Route path="/createRoom" element={<CreateUpdateRoom />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-building" element={<CreateBuilding />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      {/* </div> */}
    </div>
  );
}
export default App;
