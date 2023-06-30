import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
// import { Loader } from "components/Loader/Loader";
import { LoaderSerch } from "components/Loader/LoaderSearch";
import css from "./Layout.module.css";



function Layout() {

  const LinkActive = ({isActive}) => {
    return {color: isActive ? "red" : "green"}
  }


  return (
    <div>
      <header>
        <nav>
          <ul className={css.NavList}>
            <li><NavLink style={LinkActive} to="/">Home</NavLink></li>
            <li><NavLink style={LinkActive} to="/movies">Movies</NavLink></li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<LoaderSerch />}>
        <Outlet />
      </Suspense>
      
    </div>
  );
}

export default Layout;