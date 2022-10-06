import './App.css';
import Login from '../pages/login/Login';
import { Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard';
import Navbar from '../components/navbar/Navbar'
import Promotion from '../pages/promotion/Promotion';


function App() {
  const { pathname } = useLocation();
  return (
    <div className="App ">
      {pathname !== '/' && <Navbar />}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='dashboard/promotion' element={<Promotion />} />
      </Routes>
    </div>
  );
}


export default App;
