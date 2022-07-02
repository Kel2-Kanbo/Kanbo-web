import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./Pages/Login";
import Complex from "./Pages/Complex";
import Dashboard from "./Pages/Dashboard";
import Room from "./Pages/Room";
import Customer from "./Pages/Customer";
import Review from "./Pages/Review";
import NotFound from "./Pages/NotFound";
import CreateUpdateRoom from "./Pages/CreateUpdateRoom";
import Register from "./Pages/Register";
import VerifyEmail from "./Components/VerifyEmail";
import Building from './Pages/Building';
import EditComplexPages from './Components/EditComplexPages';
import ForgotPassword from "./Pages/ForgotPassword";
import NewPassword from "./Pages/NewPassword";
import PrivateRoute from "./PrivateRoute";
import CreateComplex from "./Pages/Complex/CreateComplex";
import CreateBuilding from "./Pages/Building/CreateBuilding";
import UpdateComplex from "./Pages/Complex/UpdateComplex";
import UpdateBuilding from "./Pages/Building/UpdateBuilding";

function App() {
  return (
    <div className="bg-secondary-softblue">
      {/* <div className="App"> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/new-pw" element={<NewPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/complex" element={<Complex />} />
          {/* <Route path="/update-complex/:id" element={<EditComplexPages />} /> */}
          <Route path="/building" element={<Building />} />
          <Route path="/room" element={<Room />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/review" element={<Review />} />
          <Route path="/createRoom" element={<CreateUpdateRoom />} />

          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/create-building" element={<CreateBuilding />} />
          <Route path="/create-complex" element={<CreateComplex />} />
          <Route path="/update-complex/:id" element={<UpdateComplex />} />
          <Route path="/update-building/:id" element={<UpdateBuilding />} />
          <Route path="*" element={<NotFound />} />
          <Route exact path="/login" element={<Login />} />
          {/* <Route element={<PrivateRoute />}>
            <Route path="/home-admin" element={<Home />} />
          </Route> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      {/* </div> */}
    </div>
  );
}
export default App;
