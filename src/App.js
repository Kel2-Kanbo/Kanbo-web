import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Dashboard from './Pages/Dashboard';
import NotFound from './Pages/NotFound';
import CreateUpdateRoom from './Pages/CreateUpdateRoom';
function App() {
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
