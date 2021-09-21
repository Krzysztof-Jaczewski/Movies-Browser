import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Footer } from "./common/Footer";
import { Navigation } from "./common/Navigation";
import { PageList } from "./common/PageList";
import { MoviesList } from "./features/MoviesList";
import { PeopleList } from "./features/PeopleList";

export const App = () => (
  <>
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path="/Movies">
          <MoviesList />
        </Route>
        <Route path="/People">
          <PeopleList />
        </Route>
        <Route path="/">
          <Redirect to="/Movies" />
        </Route>
      </Switch>
    </HashRouter>
    <PageList />
    <Footer />
  </>
);
