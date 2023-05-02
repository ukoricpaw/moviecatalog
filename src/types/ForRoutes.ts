import HomePage from "../pages/HomePage";
import SingleMedia from "../pages/SingleMedia";
import SearchPage from "../pages/SearchPage";
import PersonPage from "../pages/PersonPage";

interface Routes {
  path: string;
  element: React.ComponentType,
  exact?: boolean;
}

export const myRoutes: Routes[] = [
  { path: "/", element: HomePage },
  { path: "/:media/:id", element: SingleMedia },
  { path: "/search/:media", element: SearchPage },
  { path: "/person/:id", element: PersonPage },
]