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
  Biography,
  BirthdayInformation,
} from "./styled";
import { Placeholder } from "../Placeholder";
import { baseImgUrl, size } from "../../ApiParameters";
export const Tile = ({
  poster,
  title,
  subtitle,
  genres,
  rate,
  votes,
  person,
  details,
  biography,
  additionalTitle,
  birthday,
}) => {
  return (
    <StyledTile person={person} details={details}>
      {poster ? (
        <Poster person={person} src={`${baseImgUrl}${size}${poster}`} alt="" />
      ) : (
        <Placeholder person={person} />
      )}
      <Descrition>
        <Info>
          <Title person={person}>{title}</Title>
          <TileDate>{subtitle}</TileDate>
          {details ? (
            <>
              <TileDate>
                Date of the birth:{" "}
                <BirthdayInformation>{birthday}</BirthdayInformation>
              </TileDate>
              <TileDate>
                Place of the birth:{" "}
                <BirthdayInformation>{additionalTitle}</BirthdayInformation>
              </TileDate>
              <Biography>{biography}</Biography>{" "}
            </>
          ) : (
            ""
          )}
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
            <Caption>{person || details ? "" : "No votes yet"} </Caption>
          </Ratings>
        )}
      </Descrition>
    </StyledTile>
  );
};
