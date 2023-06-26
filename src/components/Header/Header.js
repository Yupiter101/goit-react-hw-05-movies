import { NavLink } from "react-router-dom";
import css from "./Header.module.css";


function Header() {

  const LinkActive = ({isActive}) => {
    return {color: isActive ? "red" : "green"}
  }

  return (
    <>
      <header className={css.HeaderWrap}>
        <nav>
          <ul className={css.NavList}>
            <li><NavLink style={LinkActive} to="/">Home</NavLink></li>
            <li><NavLink style={LinkActive} to="/movies">Movies</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;