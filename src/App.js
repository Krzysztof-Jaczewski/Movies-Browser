import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Navigation } from "./common/Navigation";
import { PageList } from "./common/PageList";
import { Loading } from "./common/Loading";
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
        <Route path="/Loading">
          <Loading />
        </Route>
        <Route path="/">
          <Redirect to="/Movies" />
        </Route>
      </Switch>
    </HashRouter>
    <PageList />
  </>
);
