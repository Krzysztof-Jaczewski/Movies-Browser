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
import poster from "../../images/poster.jpg";

export const Tile = ({ title, subtitle, tags, rate, votes }) => {
  return (
    <StyledTile>
      <Poster src={poster} alt="" />
      <Descrition>
        <Info>
          <Title>{title}</Title>
          <TileDate>{subtitle}</TileDate>
        </Info>
        <Tags>{tags && tags.map((tag) => <Tag>{tag}</Tag>)}</Tags>
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
