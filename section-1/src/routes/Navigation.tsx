import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { routes } from "./Routes";
import { Suspense } from "react";

const Navigation = () => {
  return (
    <Suspense fallback={<span>Cargando</span>}>
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
    </Suspense>
  );
};

export default Navigation;


/**
 * Componente SUSPENSE
 * 
 * Este componente nos permite indicarle a React el nodo desde el cual va a trabajar con lazy load componentes. 
 * Esto evita que salgan los errores de suspense y debemos arropar todo el BrowserRouter para que tenga efecto. 
 */