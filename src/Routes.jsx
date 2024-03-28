import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Dashboard from "pages/Dashboard";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Dashboard /> },
    { path: "*", element: <NotFound /> },

  ]);

  return element;
};

export default ProjectRoutes;
