import {
  StyledDetails,
  Poster,
  Description,
  Title,
  Caption,
  Biography,
  BirthdayInformation,
} from "./styled";
import { Placeholder } from "../Placeholder";
import { baseImgUrl, size } from "../../ApiParameters";
export const Details = ({
  poster,
  title,
  subtitle,
  biography,
  additionalTitle,
  birthday,
}) => {
  return (
    <StyledDetails>
      {poster ? (
        <Poster src={`${baseImgUrl}${size}${poster}`} alt="" />
      ) : (
        <Placeholder />
      )}
      <Description>
        <Title>{title}</Title>
        <Caption>
          Date of the birth:{" "}
          <BirthdayInformation>{birthday}</BirthdayInformation>
          Place of the birth:
          <BirthdayInformation>{additionalTitle}</BirthdayInformation>
        </Caption>
      </Description>
      <Biography>{biography}</Biography>
    </StyledDetails>
  );
};
