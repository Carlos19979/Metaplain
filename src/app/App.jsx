import './App.css';
import Login from '../pages/login/Login';
import { Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard';
import Promotion from '../pages/promotion/Promotion';
import MenuPromotion from '../pages/menuPromotion/MenuPromotion';
import PlanArReal from '../pages/planoRealAR/PlanArReal';
import CardViewVivienda from '../components/cardView/CardViewVivienda';



function App() {
  const { pathname } = useLocation();
  return (
    <div className="App ">
      {/* {(pathname !== '/dashboard' && pathname !==  '/') && <Navbar />} */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='dashboard/promotion' element={<Promotion />} />
        <Route path='dashboard/promotion/viviendas' element={<CardViewVivienda />} />
        <Route path='dashboard/promotion/viviendas/menu' element={<MenuPromotion />} />
        <Route path='dashboard/promotion/viviendas/real' element={<PlanArReal />} />
      </Routes>
    </div>
  );
}


export default App;
