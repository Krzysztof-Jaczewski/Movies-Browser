import { baseImgUrl, sizeBackdrop } from "../../ApiParameters";
import { Caption, Rate, Ratings } from "../Tile/styled";
import { BackdropPoster, BackdropShadow, BigStarIcon, LongTitle, RateTotal, Wrapper } from "./styled";


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
                        <Rate backdrops>{rate}<RateTotal>/10</RateTotal></Rate>
                        <Caption backdrops>{votes} votes</Caption>
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
