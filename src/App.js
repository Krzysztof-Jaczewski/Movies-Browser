import { Navigation } from "./common/Navigation";
import { PageList } from "./common/PageList";
import { MoviesList } from "./features/MoviesList";
import { PeopleList } from "./features/PeopleList";

export const App = () => (
  <>
    <Navigation />
    <MoviesList />
    <PeopleList />
    <PageList />
  </>
);
