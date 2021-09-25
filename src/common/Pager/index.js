import { useEffect, useState } from "react";
import { ReactComponent as ArrowLeft } from "../../images/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../images/arrowRight.svg";
import {
  Button,
  ButtonText,
  ButtonWrapper,
  Pages,
  PagesWrapper,
} from "./styled";

export const Pager = ({ page, totalPages }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 767;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <ButtonWrapper>
      <Button>
        {width > breakpoint ? <ButtonText>First</ButtonText> : <ArrowLeft />}
        <ArrowLeft />
      </Button>

      <Button>
        <ArrowLeft />
        {width > breakpoint ? <ButtonText>Previous</ButtonText> : ""}
      </Button>

      <PagesWrapper>
        <Pages>Page</Pages>
        <Pages number>{page}</Pages>
        <Pages>of</Pages>
        <Pages number>{totalPages}</Pages>
      </PagesWrapper>
      <Button>
        {width > breakpoint ? <ButtonText>Next</ButtonText> : ""}
        <ArrowRight />
      </Button>
      <Button>
        {width > breakpoint ? <ButtonText>Last</ButtonText> : <ArrowRight />}
        <ArrowRight />
      </Button>
    </ButtonWrapper>
  );
};
