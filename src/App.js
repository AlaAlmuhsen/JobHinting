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
import PostJob from './pages/PostJob';
import Applied from './pages/Applied';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';

function App() {
  window.sessionStorage.setItem("userActive",false)
  return (
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route path='/findjob' element={<Findjob />}/>
      <Route path='/Applied/:jobid/:companyid/:jobLevel/:typeOfEmployment/:title/:name' element={<Applied/>}/>
      <Route path='/findjob/:category' element={<Findjob />}/>
      <Route path='/jobdetails/:id' element={<JobDetails />}/>
      <Route path='/SignUp' element={<SignIn />}/>
      <Route path='//Profile' element={<Profile />}/>
      <Route path='/browsecompanies' element={<Browsecompanies />}/>
      <Route path='/dashboard' element={<DashBoard />}/>
      <Route path='/dashboard/postjob' element={<PostJob />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
  );
}
export default App;
