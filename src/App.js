import { Navigation } from "./common/Navigation";
import { PageList } from "./common/PageList";
import { MoviesList } from "./features/MoviesList";

export const App = () => (
  <>
    <Navigation />
    <MoviesList />
    <PageList />
  </>
);
