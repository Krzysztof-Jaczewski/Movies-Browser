import { Section, Header } from "./styled";
export const CastCrew = ({ children, header }) => {
  window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) Section.scrollLeft += 100;
    else Section.scrollLeft -= 100;
  });
  return (
    <>
      <Header>{header}</Header>
      <Section>{children}</Section>
    </>
  );
};
