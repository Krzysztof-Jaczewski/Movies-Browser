import { ReactComponent as ArrowLeft } from "./arrowLeft.svg";
import { ReactComponent as ArrowRight } from "./arrowRight.svg";
import { Button, ButtonText, ButtonWrapper, Pages, PagesWrapper } from "./styled";

export const PageList = () => (
    <ButtonWrapper>
        <Button first><ArrowLeft /><ButtonText>First</ButtonText></Button>
        <Button><ArrowLeft /><ButtonText>Previous</ButtonText></Button>
            <PagesWrapper>
                <Pages>Page</Pages>
                <Pages number>1</Pages>
                <Pages>of</Pages>
                <Pages number>500</Pages>
            </PagesWrapper>
        <Button right><ButtonText>Next</ButtonText><ArrowRight /></Button>
        <Button right last><ButtonText>Last</ButtonText><ArrowRight /></Button>
    </ButtonWrapper>
)