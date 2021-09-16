import { useEffect, useState } from "react";
import { ReactComponent as ArrowLeft } from "../../images/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../images/arrowRight.svg";
import { Button, ButtonText, ButtonWrapper, Pages, PagesWrapper } from "./styled";

export const PageList = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 767;
    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

    return(
        <ButtonWrapper>
        <Button>
            {width > breakpoint ? 
                <>
                    <ArrowLeft /><ButtonText>First</ButtonText>
                </> : 
                <>
                    <ArrowLeft /><ArrowLeft />
                </>}
        </Button>
        <Button>
            {width > breakpoint ? 
                    <>
                        <ArrowLeft /><ButtonText>Previous</ButtonText>
                    </> : 
                    <>
                        <ArrowLeft />
                    </>}    
        </Button>
            <PagesWrapper>
                <Pages>Page</Pages>
                <Pages number>1</Pages>
                <Pages>of</Pages>
                <Pages number>500</Pages>
            </PagesWrapper>
            <Button>
            {width > breakpoint ? 
                <>
                    <ButtonText>Next</ButtonText><ArrowRight />
                </> : 
                <>
                    <ArrowRight />
                </>}
        </Button>
        <Button>
            {width > breakpoint ? 
                <>
                    <ButtonText>Last</ButtonText><ArrowRight />
                </> : 
                <>
                    <ArrowRight /><ArrowRight />
                </>}
        </Button>
    </ButtonWrapper>
    )
}