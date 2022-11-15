import './App.css';
import Login from '../pages/login/Login';
import { Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard';
import Navbar from '../components/navbar/Navbar'
import Promotion from '../pages/promotion/Promotion';
import MenuPromotion from '../pages/menuPromotion/MenuPromotion';
import MoreInfo from '../pages/moreInfo/MoreInfo';
import Plan3dAR from '../pages/plano3dAR/Plan3dAr';
import PlanArReal from '../pages/planoRealAR/PlanArReal';



function App() {
  const { pathname } = useLocation();
  return (
    <div className="App ">
      {(pathname !== '/dashboard' && pathname !==  '/') && <Navbar />}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='dashboard/promotion' element={<Promotion />} />
        <Route path='dashboard/promotion/menu' element={<MenuPromotion />} />
        <Route path='dashboard/promotion/360' element={<Plan3dAR />} />
        <Route path='dashboard/promotion/real' element={<PlanArReal />} />
        <Route path='dashboard/promotion/MoreInfo' element={<MoreInfo />} />
      </Routes>
    </div>
  );
}


export default App;
