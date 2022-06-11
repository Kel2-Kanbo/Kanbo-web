import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateBuilding from './Components/CreateBuilding';
import Dashboard from './Pages/Dashboard';
import NotFound from './Pages/NotFound';
import Register from './Pages/Register';

function App() {
  return (
    <div>
    {/* <div className="App"> */}
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route exact path="/login" element={<Login />} />
          <Route element={ <PrivateRoute /> }>
            <Route path="/home-admin" element={<Home />} />
          </Route> */}
          <Route path="register" element={<Register/>}/>
          <Route path="/create-building" element={<CreateBuilding/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
