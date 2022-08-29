import style from "./NotFound.module.scss";
import { Link } from "react-router-dom";
import baloons from "../../Assets/Images/baloons.png";

const NotFound = () => {
  return (
    <div className={style.container}>
      <h1>404</h1>
      <div className={style.errorDescription}>
        Ta strona nie jest jeszcze ozdobiona :(
      </div>
      <div className={style.return}>
        Wróć do&nbsp;<Link to="/">strony głównej.</Link>
      </div>
      <img src={baloons} alt="baloons" />
      <img src={baloons} alt="baloons" />
    </div>
  );
};

export default NotFound;
