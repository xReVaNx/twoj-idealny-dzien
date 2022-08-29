import style from "./Navbar.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [visibleNavbar, setVisibleNavbar] = useState(false);

  const ScrollNavbar = () => {
    if (window.scrollY > 80) {
      setVisibleNavbar(true);
    } else {
      setVisibleNavbar(false);
    }
  };

  window.addEventListener("scroll", ScrollNavbar);

  return (
    <div className={`${style.container} ${visibleNavbar ? style.visible : ""}`}>
      <motion.div
        className={style.logo}
        initial={{ scale: 3, y: 300, x: 550, opacity: 0 }}
        animate={{ scale: 1, y: 0, x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 2.5,
          opacity: { duration: 1.5, delay: 0 },
        }}
      >
        Twój idealny dzień
      </motion.div>
      <motion.ul
        className={style.navlist}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Link to="/">strona główna</Link>
        <Link to="/oferta">oferta</Link>
        <Link to="/rezerwacja">zarezerwuj</Link>
        <Link to="/galeria">galeria</Link>
        <Link to="/o-nas">o nas</Link>
        <Link to="/kontakt">kontakt</Link>
      </motion.ul>
    </div>
  );
};

export default Navbar;
