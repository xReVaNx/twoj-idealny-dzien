import style from "./Navbar.module.scss";
import React, { useState } from "react";
import Logo from "../../Assets/Images/twoj_idealny_dzien.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import { FaWrench } from "react-icons/fa";
import SignInBox from "../../Components/SignInBox/SignInBox";
import SignInOverlay from "../../Components/SignInOverlay/SignInOverlay";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const [visibleNavbar, setVisibleNavbar] = useState(false);
  const [visibleProfile, setVisibleProfile] = useState(false);

  const isLogged = useSelector((state: any) => state.isLogged);
  const dispatch = useDispatch();

  const ScrollNavbar = () => {
    if (window.scrollY > 50) {
      setVisibleNavbar(true);
    } else {
      setVisibleNavbar(false);
    }
  };

  const handleProfile = () => {
    setVisibleProfile(!visibleProfile);
  };

  window.addEventListener("scroll", ScrollNavbar);

  return (
    <React.Fragment>
      {visibleProfile && (
        <React.Fragment>
          <SignInBox exitButton={handleProfile} />
          <SignInOverlay onClick={handleProfile} />
        </React.Fragment>
      )}
      <div
        className={`${style.container} ${visibleNavbar ? style.visible : ""}`}
      >
        <motion.div
          className={style.logoContainer}
          initial={{ scale: 3, y: 300, x: 550, opacity: 0 }}
          animate={{ scale: 1, y: 0, x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2.5,
            opacity: { duration: 1.5, delay: 0 },
          }}
        >
          Twój Idealny Dzień
          {/* <img className={style.logo} src={Logo} alt="Twój Idealny Dzień" /> */}
        </motion.div>
        <motion.ul
          className={style.navlist}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <li>
            <Link to="/">strona główna</Link>
          </li>
          <li>
            <Link to="/oferta">oferta</Link>
          </li>
          <li>
            <Link to="/rezerwacja">zarezerwuj</Link>
          </li>
          <li>
            <Link to="/galeria">galeria</Link>
          </li>
          <li>
            <Link to="/o-nas">o nas</Link>
          </li>
          <li>
            <Link to="/kontakt">kontakt</Link>
          </li>
          {isLogged && (
            <li>
              <FaWrench />
            </li>
          )}
          <li>
            {!isLogged ? (
              <CgProfile onClick={handleProfile} />
            ) : (
              <button
                className={style.logoutBtn}
                onClick={() => {
                  dispatch({ type: "SIGN_OUT" });
                }}
              >
                Wyloguj się
              </button>
            )}
          </li>
        </motion.ul>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
