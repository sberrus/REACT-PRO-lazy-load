import { LazyPage1, LazyPage3, Lazypage2 } from "../01-lazyload/pages";

interface RoutesInterface {
  to: string;
  path: string;
  Component: () => JSX.Element;
  name: string;
}

export const routes: RoutesInterface[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: LazyPage1,
    name: "Lazy-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: Lazypage2,
    name: "Lazy-2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: LazyPage3,
    name: "Lazy-3",
  },
];
