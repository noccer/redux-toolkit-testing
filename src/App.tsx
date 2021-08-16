import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import ArticlePage from "./pages/article";
import ArticlesPage from "./pages/articles";
import HomePage from "./pages/home";
import "./index.css";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <Router>
      <div>
        You are running this application in <b>{import.meta.env.MODE}</b> mode.
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="bg-blue-100">
              Home Page
            </NavLink>
          </li>
          <li>
            <NavLink to="/articles" activeClassName="bg-blue-100">
              Articles Page
            </NavLink>
          </li>
        </ul>
        <div className="container max-w-3xl mx-auto px-4">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/articles/:id">
              <ArticlePage />
            </Route>
            <Route path="/articles">
              <ArticlesPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
export default App;
