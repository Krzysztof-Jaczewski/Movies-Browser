import { Container } from "../../common/Container";
import { Tile } from "../../common/Tile";
import poster from "../../images/poster.jpg";

export const MovieList = () => {
  return (
    <Container>
      <Tile
        poster={poster}
        title={"Mulan"}
        subtitle={"2020"}
        tags={["Drama", "Action", "Adventure", "Thriller"]}
        rate={"7.8"}
        votes={"35"}
      />
      <Tile
        poster={poster}
        title={"Mulan"}
        tags={["Drama"]}
        rate={"7.5"}
        votes={"35"}
      />
      <Tile
        poster={poster}
        title={"Mulan"}
        subtitle={"2020"}
        rate={"7.5"}
        votes={"35"}
      />
      <Tile
        title={"Mulan very long title for experiment"}
        subtitle={"2020"}
        tags={["Drama"]}
      />
    </Container>
  );
};
