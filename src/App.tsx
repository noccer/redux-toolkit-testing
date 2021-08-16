import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import ArticlePage from "./pages/article";
import ArticlesPage from "./pages/articles";
import HomePage from "./pages/home";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/articles">Articles Page</Link>
          </li>
        </ul>
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
    </Router>
  );
};
export default App;
