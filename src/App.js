import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Findjob from './pages/Findjob';
import Browsecompanies from './pages/Browsecompanies';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';
import JobDetails from './pages/JobDetails';

function App() {
  window.sessionStorage.setItem("userActive",false)
  return (
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route path='/findjob' element={<Findjob />}/>

      <Route path='/findjob/:category' element={<Findjob />}/>
      <Route path='/jobdetails/:id' element={<JobDetails />}/>
      <Route path='/browsecompanies' element={<Browsecompanies />}/>
      <Route path='/dashboard' element={<DashBoard />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
  );
}
export default App;
