import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Findjob from './pages/Findjob';
import Browsecompanies from './pages/Browsecompanies';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/findjob' element={<Findjob />}/>
      <Route path='/browsecompanies' element={<Browsecompanies />}/>
    </Routes>
  );
}

export default App;
