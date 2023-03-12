import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import { Home } from './Home'
import { Test } from './Test'

const router = createBrowserRouter([
    {
      path: "/",
      element: <div> < Home /> </div>,
    },
    {
        path: "/test",
        element: <div> < Test /> </div>,
      },
]);

export const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}