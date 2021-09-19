import {
  Caption,
  Descrition,
  Poster,
  Info,
  Rate,
  Ratings,
  StyledTile,
  StarIcon,
  Tag,
  Tags,
  Title,
  TileDate,
} from "./styled";
import { Placeholder } from "../Placeholder";

export const Tile = ({
  poster,
  title,
  subtitle,
  genres,
  rate,
  votes,
  person,
}) => {
  return (
    <StyledTile person={person}>
      {poster ? (
        <Poster person={person} src={poster} alt="" />
      ) : (
        <Placeholder person={person} />
      )}
      <Descrition>
        <Info>
          <Title person={person}>{title}</Title>
          <TileDate>{subtitle}</TileDate>
        </Info>
        <Tags>
          {genres && genres.map((genre) => <Tag key={genre}>{genre}</Tag>)}
        </Tags>
        {votes ? (
          <Ratings>
            <StarIcon />
            <Rate>{rate}</Rate>
            <Caption>{votes} votes</Caption>
          </Ratings>
        ) : (
          <Ratings>
            <Caption>{person ? "" : "No votes yet"} </Caption>
          </Ratings>
        )}
      </Descrition>
    </StyledTile>
  );
};
