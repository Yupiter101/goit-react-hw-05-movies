
import { Outlet, NavLink } from "react-router-dom";
import css from "./Layout.module.css";


function Layout() {

  const LinkActive = ({isActive}) => {
    return {color: isActive ? "red" : "green"}
  }


  return (
    <div>
      <header className={css.HeaderWrap}>
        <nav>
          <ul className={css.NavList}>
            <li><NavLink style={LinkActive} to="/">Home</NavLink></li>
            <li><NavLink style={LinkActive} to="/movies">Movies</NavLink></li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;