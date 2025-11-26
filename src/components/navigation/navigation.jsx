import { NavLink } from "react-router";
import styles from "./navigation.module.css";
import { useState } from "react";
import { FaBurger } from "react-icons/fa6"; 
import { FaShoppingBasket } from "react-icons/fa";
import logo from "/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.navigation}>
      <img className={styles.logo} src={logo} alt="Logo" />
      <FaShoppingBasket size={35} />
      <FaBurger size={35} onClick={() => setIsOpen(!isOpen)} />

        {/* Lukker menuen hvis man trykker undenfor den. */}
        {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

      <ul className={`${styles.menu} ${isOpen ? styles.open : ""}`}>

        <li>
          <NavLink to="/" onClick={closeMenu}>
            Forsiden
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" onClick={closeMenu}>
            Vores produkter
          </NavLink>
        </li>
        <li>
          <NavLink to="/QA" onClick={closeMenu}>
            Spørg om sunhed
          </NavLink>
        </li>
        <li>
          <NavLink to="/medlem" onClick={closeMenu}>
            Bliv medlem
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
