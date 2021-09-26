import { useEffect, useState } from "react";
import { ReactComponent as ArrowLeft } from "../../images/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../images/arrowRight.svg";
import { useReplaceURLParameters } from "../../useURLParameters";
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
  const replaceURLParameters = useReplaceURLParameters();

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const changePage = (page) => {
    replaceURLParameters([
      {
        key: "page",
        value: page,
      },
    ]);
  };

  return (
    <ButtonWrapper>
      <Button disabled={page === 1} onClick={() => changePage(1)}>
        {width > breakpoint ? <ButtonText>First</ButtonText> : <ArrowLeft />}
        <ArrowLeft />
      </Button>

      <Button disabled={page === 1} onClick={() => changePage(page - 1)}>
        <ArrowLeft />
        {width > breakpoint ? <ButtonText>Previous</ButtonText> : ""}
      </Button>

      <PagesWrapper>
        <Pages>Page</Pages>
        <Pages number>{page}</Pages>
        <Pages>of</Pages>
        <Pages number>{totalPages}</Pages>
      </PagesWrapper>

      <Button
        disabled={page === totalPages}
        onClick={() => changePage(page + 1)}
      >
        {width > breakpoint ? <ButtonText>Next</ButtonText> : ""}
        <ArrowRight />
      </Button>

      <Button
        disabled={page === totalPages}
        onClick={() => changePage(totalPages)}
      >
        {width > breakpoint ? <ButtonText>Last</ButtonText> : <ArrowRight />}
        <ArrowRight />
      </Button>
    </ButtonWrapper>
  );
};
