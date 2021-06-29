import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import RegisterDog from "./pages/RegisterDog/RegisterDog";
import Login from "./pages/LoginPage/Login";
import SearchMatch from "./pages/SearchMatch/SearchMatch";
import RegisterSitter from "./pages/RegisterSitter/RegisterSitter";
import SearchSitter from "./pages/SearchSitter/SearchSitter";
import Profile from "./pages/Profile/Profile";

type CustomRouteProps = RouteProps & {
  Component: () => JSX.Element;
  path: string;
};

const routes: CustomRouteProps[] = [
  { path: "/", Component: LandingPage, exact: true },
  { path: "/registerdog", Component: RegisterDog },
  { path: "/registersitter", Component: RegisterSitter },
  { path: "/login", Component: Login },
  { path: "/searchdog", Component: SearchDog },
  { path: "/searchsitter", Component: SearchSitter },
  { path: "/profile", Component: Profile },
  { path: "/searchmatch", Component: SearchMatch },
];

function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          {routes.map(({ Component, ...routeProps }) => (
            <Route key={routeProps.path} {...routeProps}>
              <Component />
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
