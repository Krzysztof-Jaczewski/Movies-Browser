import {
  StyledDetails,
  Poster,
  Description,
  Title,
  Biography,
  BirthdayInformation,
  Birth,
  Frame,
} from "./styled";
import { Placeholder } from "../Placeholder";
import { getPosterURLpath } from "../../logic/getURLpath";
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
        <Poster src={getPosterURLpath(poster)} alt="" />
      ) : (
        <Placeholder />
      )}
      <Description>
        <Title>{title}</Title>
        <Birth>
          <Frame birth>
            <BirthdayInformation>{birthday}</BirthdayInformation>
          </Frame>
          <Frame>
            <BirthdayInformation>{additionalTitle}</BirthdayInformation>
          </Frame>
        </Birth>
      </Description>
      <Biography>{biography}</Biography>
    </StyledDetails>
  );
};
