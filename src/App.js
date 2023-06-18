import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Findjob from './pages/Findjob';
import Browsecompanies from './pages/Browsecompanies';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/findjob' element={<Findjob />}/>
      <Route path='/browsecompanies' element={<Browsecompanies />}/>
      <Route path='/dashboard' element={<DashBoard />}/>
      <Route path='/Login' element={<Login />}/>
    </Routes>
  );
}

export default App;
