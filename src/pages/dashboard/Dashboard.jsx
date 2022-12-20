import React from "react";
import DashboardList from "../../components/list/DashboardList";
import "@google/model-viewer";
import dbLoader from "../../components/dbLoader/dbLoader";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dbdata = dbLoader();

    setData(dbdata);
  }, []);

  return (
    <div>
      <DashboardList props={data}></DashboardList>
    </div>
  );
}
