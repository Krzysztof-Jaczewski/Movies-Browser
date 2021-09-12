import { StyledPlaceholder, CameraIcon, PersonIcon } from "./styled";

export const Placeholder = ({ person }) =>
  person ? (
    <StyledPlaceholder person>
      <PersonIcon />
    </StyledPlaceholder>
  ) : (
    <StyledPlaceholder>
      <CameraIcon />
    </StyledPlaceholder>
  );
