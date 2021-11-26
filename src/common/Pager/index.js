import { useReplaceURLParameters } from "../../useURLParameters";
import {
  Arrow,
  Button,
  ButtonText,
  ButtonWrapper,
  LetfArrow,
  Pages,
  PagesWrapper,
} from "./styled";

export const Pager = ({ page, totalPages }) => {
  const replaceURLParameters = useReplaceURLParameters();

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
      <>
        <Button disabled={page === 1} onClick={() => changePage(1)}>
          <LetfArrow disabled={page === 1} />
          <LetfArrow disabled={page === 1} />
          <ButtonText>First</ButtonText>
        </Button>
        <Button disabled={page === 1} onClick={() => changePage(page - 1)}>
          <LetfArrow disabled={page === 1} />
          <ButtonText disabled={page === 1}>Previous</ButtonText>
        </Button>
      </>

      <PagesWrapper>
        <Pages>Page</Pages>
        <Pages number>{page}</Pages>
        <Pages>of</Pages>
        <Pages number>{totalPages}</Pages>
      </PagesWrapper>
      <>
        <Button
          disabled={page === totalPages}
          onClick={() => changePage(page + 1)}
        >
          <ButtonText disabled={page === totalPages}>Next</ButtonText>
          <Arrow disabled={page === totalPages} />
        </Button>
        <Button
          disabled={page === totalPages}
          onClick={() => changePage(totalPages)}
        >
          <ButtonText disabled={page === totalPages}>Last</ButtonText>
          <Arrow disabled={page === totalPages} />
          <Arrow disabled={page === totalPages} />
        </Button>
      </>
    </ButtonWrapper>
  );
};
