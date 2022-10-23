
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Wellcome from './component/pages/Wellcome';
import AddUsers from './component/pages/AddUsers';
import AllUsers from './component/pages/AllUsers';
import EditUser from './component/pages/EditUser';
import UseReducerExample from './component/rough/UseReducerExample';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from './component/layouts/Navigation';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Navigation />
      <Routes>
        <Route path="/" element={<Wellcome />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/addUsers" element={<AddUsers />}></Route>
        <Route path="/allUsers" element={<AllUsers />}></Route>
        <Route path="/editUser/:id" element={<EditUser />}></Route>
        <Route path="/useReducerExample" element={<UseReducerExample />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
