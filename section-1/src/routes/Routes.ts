import { LazyExoticComponent, lazy } from "react";
import { LazyPage3 } from "../01-lazyload/pages";

type JSXElement = () => JSX.Element;

interface RoutesInterface {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXElement> | JSXElement;
  name: string;
}

// componentes lazy
const Lazy1 = lazy(() => import("../01-lazyload/pages/LazyPage1"));
const Lazy2 = lazy(() => import("../01-lazyload/pages/LazyPage2"));
// const Lazy3 = lazy(() => import("../01-lazyload/pages/LazyPage3"));

export const routes: RoutesInterface[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: Lazy1,
    name: "Lazy-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: Lazy2,
    name: "Lazy-2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: LazyPage3,
    name: "Lazy-3",
  },
];
