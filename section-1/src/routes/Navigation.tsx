import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { LazyPage1, LazyPage3, Lazypage2 } from "../01-lazyload/pages";
import { routes } from "./Routes";

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          [LOGO]
          <ul>
            {routes.map(({ to, name }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<Navigate replace to={routes[0].to} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
