import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import RegisterDog from "./pages/RegisterDog/RegisterDog";

type CustomRouteProps = RouteProps & {
  Component: () => JSX.Element;
  path: string;
};

const routes: CustomRouteProps[] = [
  { path: "/", Component: LandingPage, exact: true },
  { path: "/registerdog", Component: RegisterDog },
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
