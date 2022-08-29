import style from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.footerBox}>
        <h4>Menu</h4>
        <Link to="/">Strona Główna</Link>
        <Link to="/oferta">Oferta</Link>
        <Link to="/rezerwacja">Zarezerwuj</Link>
        <Link to="/galeria">Galeria</Link>
        <Link to="/o-nas">O nas</Link>
        <Link to="/kontakt">Kontakt</Link>
      </div>
      <div className={style.footerBox}>
        <h4>Kontakt</h4>
        <a href="tel:XXX-XXX-XXX">Tel.: XXX-XXX-XXX</a>
        <a href="mailto:kontakt@twoj-idealny-dzien.pl">
          kontakt@twoj-idealny-dzien.pl
        </a>
      </div>
      <div className={style.footerBox}>
        <h4>Social Media</h4>
      </div>
    </div>
  );
};

export default Footer;
