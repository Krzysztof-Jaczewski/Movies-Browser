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

export const Tile = ({ poster, title, subtitle, genres, rate, votes }) => {
  return (
    <StyledTile>
      {poster ? <Poster src={poster} alt="" /> : <Placeholder />}
      <Descrition>
        <Info>
          <Title>{title}</Title>
          <TileDate>{subtitle}</TileDate>
        </Info>
        <Tags>{genres && genres.map((genre) => <Tag>{genre}</Tag>)}</Tags>
        {votes ? (
          <Ratings>
            <StarIcon />
            <Rate>{rate}</Rate>
            <Caption>{votes} votes</Caption>
          </Ratings>
        ) : (
          <Ratings>
            <Caption>No votes yet </Caption>
          </Ratings>
        )}
      </Descrition>
    </StyledTile>
  );
};
