import {
  Caption,
  Descrition,
  Image,
  Info,
  Rate,
  Ratings,
  StyledTile,
  Tag,
  Tags,
  Title,
} from "./styled";
import poster from "../../images/poster.jpg";
import { ReactComponent as Star } from "../../images/star.svg";

export const Tile = ({ title, subtitle, tags, rate, votes }) => {
  return (
    <StyledTile>
      <Image src={poster} alt="" />
      <Descrition>
        <Info>
          <Title>{title}</Title>
          <Caption>{subtitle}</Caption>
        </Info>
        <Tags>{tags && tags.map((tag) => <Tag>{tag}</Tag>)}</Tags>
        {votes ? (
          <Ratings>
            <Star />
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
