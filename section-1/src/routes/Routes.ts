import { LazyExoticComponent, lazy } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

type JSXElement = () => JSX.Element;

interface RoutesInterface {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXElement> | JSXElement;
  name: string;
}

// componentes lazy
const LazyLayout = lazy(
  () =>
    import(
      /*  webpackChunkName:  lazy-layout-page*/ "../01-lazyload/layout/LazyLayout"
    )
);

export const routes: RoutesInterface[] = [
  {
    path: "lazyload/*",
    to: "/lazyload/",
    Component: LazyLayout,
    name: "Lazy-1",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
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
