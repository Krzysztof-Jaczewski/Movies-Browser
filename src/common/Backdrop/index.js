import { baseImgUrl, sizeBackdrop } from "../../ApiParameters";
import { BackdropPoster, BackdropShadow, BigStarIcon, Caption, LongTitle, Rate, RateTotal, Ratings, Wrapper } from "./styled";


export const Backdrop = ({title, votes, rate, person, poster}) => {
    return (
        <>
        <BackdropShadow>
            <BackdropPoster image={`${baseImgUrl}${sizeBackdrop}${poster}`} alt="" />
            <Wrapper>
            <LongTitle>
                {title}
            </LongTitle>
            {votes ? (
                    <Ratings>
                        <BigStarIcon />
                        <Rate>{rate}<RateTotal>/10</RateTotal></Rate>
                        <Caption>{votes} votes</Caption>
                    </Ratings>
                    ) : (
                    <Ratings>
                        <Caption>{person ? "" : "No votes yet"} </Caption>
                    </Ratings>
                )}
            </Wrapper>
        </BackdropShadow>
        </>
    )
}
