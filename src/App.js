import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Dashboard from './Pages/Dashboard';
import NotFound from './Pages/NotFound';
import Room from './Pages/Room';

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
          <Route path="/room" element={<Room/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
