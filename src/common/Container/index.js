import { StyledContainer } from "./styled";

export const Container = ({ children, person, details }) => {
  return (
    <StyledContainer person={person} details={details}>
      {children}
    </StyledContainer>
  );
};
