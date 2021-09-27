import { BackdropPoster, BackdropShadow, BigStarIcon, LongTitle } from "./styled";


export const Backdrop = ({title}) => {
    return (
        <BackdropShadow>
            <BackdropPoster src={``} alt="" />
            <LongTitle>
                {title}
                </LongTitle>
            <BigStarIcon />
        </BackdropShadow>
    )
}
