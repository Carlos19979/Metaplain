import './App.css';
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard';
import Promotion from '../pages/promotion/Promotion';
import MenuPromotion from '../pages/menuPromotion/MenuPromotion';
import PlanArReal from '../pages/augmentedReality/RealScaleAr';
import CardViewVivienda from '../components/cardView/CardViewVivienda';



function App() {
  return (
    <div className="App ">

      <Routes>
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
