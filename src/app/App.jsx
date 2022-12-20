import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Promotion from "../pages/promotion/Promotion";
import MenuPromotion from "../pages/menuPromotion/MenuPromotion";
import PlanArReal from "../pages/augmentedReality/RealScaleAr";
import Houses from "../pages/houses/Viviendas";

function App() {


    var url = window.location.href;
    var startUrl = url.toString().split("/")[3];
    sessionStorage.removeItem("url");
    sessionStorage.setItem("url", startUrl);




  return (
    <div className="App ">
      <Routes>
        <Route path=":id/dashboard" element={<Dashboard/>} />
        <Route path=":id/dashboard/promotion/:promotionId" element={<Promotion />} />
        <Route
          path=":id/dashboard/promotion/:id/viviendas"
          element={<Houses />}
        />
        <Route
          path=":id/dashboard/promotion/:id/viviendas/menu/:id"
          element={<MenuPromotion />}
        />
        <Route
          path=":id/dashboard/promotion/:id/viviendas/menu/:id/real"
          element={<PlanArReal />}
        />
      </Routes>
    </div>
  );
}
export default App;
