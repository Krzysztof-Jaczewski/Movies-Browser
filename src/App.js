import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Footer } from "./common/Footer";
import { Navigation } from "./common/Navigation";
import { MoviesList } from "./features/MoviesList";
import { PeopleList } from "./features/PeopleList";
import MovieDetails from "./features/MovieDetails";

export const App = () => (
  <>
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path="/Movies/:movie_id">
          <MovieDetails />
        </Route>
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
    <Footer />
  </>
);
