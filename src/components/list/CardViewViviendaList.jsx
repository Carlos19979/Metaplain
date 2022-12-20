import { Link } from "react-router-dom";
import CardViewVivienda from "../cardView/CardViewVivienda";

export default function List({ props }) {
  return (
    <div className="sm:flex px-8 gap-3 py-8 ">
      {props.map((propsF, index) => (
           <Link to={"menu/"+propsF.id} className='col-span-2'>
          <CardViewVivienda props={propsF} />
          </Link>
      ))}
    </div>
  );
}
