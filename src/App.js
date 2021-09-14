import { Navigation } from "./common/Navigation";
import { PageList } from "./common/PageList";
import { MovieList } from "./features/MovieList";

export const App = () => (
  <>
    <Navigation />
    <MovieList />
    <PageList />
  </>
);
