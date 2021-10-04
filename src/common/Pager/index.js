import { useEffect, useState } from "react";
import { useReplaceURLParameters } from "../../useURLParameters";
import {
  Arrow,
  ArrowDisabled,
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
      {page === 1 ?
    <>
      <Button disabled={page === 1} onClick={() => changePage(1)}>
    {width > breakpoint ? <ButtonText>First</ButtonText> : <ArrowDisabled left />}
    <ArrowDisabled left />
  </Button>

  <Button disabled={page === 1} onClick={() => changePage(page - 1)}>
    <ArrowDisabled left />
    {width > breakpoint ? <ButtonText>Previous</ButtonText> : ""}
  </Button>
  </>
  :
  <>
  <Button disabled={page === 1} onClick={() => changePage(1)}>
    {width > breakpoint ? <ButtonText>First</ButtonText> : <Arrow left />}
    <Arrow left />
  </Button>
  <Button disabled={page === 1} onClick={() => changePage(page - 1)}>
    <Arrow left />
    {width > breakpoint ? <ButtonText>Previous</ButtonText> : ""}
  </Button>
    </>}
      <PagesWrapper>
        <Pages>Page</Pages>
        <Pages number>{page}</Pages>
        <Pages>of</Pages>
        <Pages number>{totalPages}</Pages>
      </PagesWrapper>

      {page === totalPages ?
        <>
        <Button
        disabled={page === totalPages}
        onClick={() => changePage(page + 1)}
      >
        {width > breakpoint ? <ButtonText>Next</ButtonText> : ""}
        <ArrowDisabled />
      </Button>
            <Button
            disabled={page === totalPages}
            onClick={() => changePage(totalPages)}
          >
            {width > breakpoint ? <ButtonText>Last</ButtonText> : <ArrowDisabled />}
            <ArrowDisabled />
          </Button>
          </>
      :
      <>
      <Button
        disabled={page === totalPages}
        onClick={() => changePage(page + 1)}
      >
        {width > breakpoint ? <ButtonText>Next</ButtonText> : ""}
        <Arrow />
      </Button>
            <Button
            disabled={page === totalPages}
            onClick={() => changePage(totalPages)}
          >
            {width > breakpoint ? <ButtonText>Last</ButtonText> : <Arrow />}
            <Arrow />
          </Button>
          </>
    }
    


    </ButtonWrapper>
  );
};
