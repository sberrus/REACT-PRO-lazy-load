import { LazyExoticComponent, lazy } from "react";

type JSXElement = () => JSX.Element;

interface RoutesInterface {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXElement> | JSXElement;
  name: string;
}

// componentes lazy
const Lazy1 = lazy(
  () =>
    import(
      /*  webpackChunkName:  custom-chunk-name-1*/ "../01-lazyload/pages/LazyPage1"
    )
);
const Lazy2 = lazy(
  () =>
    import(
      /*  webpackChunkName:  custom-chunk-name-2*/ "../01-lazyload/pages/LazyPage2"
    )
);
const Lazy3 = lazy(
  () =>
    import(
      /*  webpackChunkName:  custom-chunk-name-3*/ "../01-lazyload/pages/LazyPage3"
    )
);

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
    Component: Lazy3,
    name: "Lazy-3",
  },
];

/**
 * SOLO PARA WEBPACK
 * Cambiar el nómbre de los chunks manualmente.
 *
 * Al principio de la declaración, antes de la ruta del componente que vamos a volver
 * lazy, ponemos un comentario de js y dentro ponemos webpackChunkName: [nombre custom del chunk] para
 * definir el nombre para mejorar la legibilidad y el debug a futuro.
 */
