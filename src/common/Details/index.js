import {
  StyledTile,
  Poster,
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
  biography,
  additionalTitle,
  birthday,
}) => {
  return (
    <StyledTile>
      <Poster src={`${baseImgUrl}${size}${poster}`} alt="" />
      <Placeholder />
      <Title>{title}</Title>
      <TileDate>{subtitle}</TileDate>
      <TileDate>
        Date of the birth: <BirthdayInformation>{birthday}</BirthdayInformation>
      </TileDate>
      <TileDate>
        Place of the birth:{" "}
        <BirthdayInformation>{additionalTitle}</BirthdayInformation>
      </TileDate>
      <Biography>{biography}</Biography>{" "}
    </StyledTile>
  );
};
