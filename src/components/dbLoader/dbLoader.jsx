import db from "../../../db.json";

export default function dbLoader() {
  let url = sessionStorage.getItem("url");
  switch (url) {
    case "ficsa":
      return db.ficsa.promotions;
    case "metrovacesa":
      return db.metrovacesa.promotions;
    case "urbania":
      return db.urbania.promotions;
    default:
      console.log(`error la url no existe.`);
  }
}
