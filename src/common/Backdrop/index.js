import { baseImgUrl } from "../../ApiParameters";
import { BackdropPoster, BackdropShadow, BigStarIcon, LongTitle } from "./styled";


export const Backdrop = ({title, backdrops}) => {
    return (
        <>
        <BackdropShadow>
            <BackdropPoster src={`${baseImgUrl}${backdrops}`} alt="" />
            <LongTitle>
                {title}
            </LongTitle>
            <BigStarIcon />
        </BackdropShadow>
        </>
    )
}
