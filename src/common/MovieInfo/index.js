import { baseImgUrl, size } from "../../ApiParameters"
import { Container } from "../Container"
import { Caption, Rate, Ratings, StarIcon, Tag, Tags } from "../Tile/styled"
import { Info, Poster } from "./styled"


export const MovieInfo = ({poster, title, description, date, countries, votes, rate, person, genres}) => {

    return (
        <>
        <Container>
        <Info>
            <Poster src={`${baseImgUrl}${size}${poster}`} alt=""  />
            <div>
                <h2>
                    {title}
                </h2>
                <p>
                    {date}
                </p>
                <p>
                    Production: {countries}
                </p>
                <p>
                    Release date: {date}
                </p>
                <Tags>
                    {genres && genres.map((genre) => <Tag key={genre}>{genre}</Tag>)}
                </Tags>
                {votes ? (
                    <Ratings>
                        <StarIcon />
                        <Rate>{rate}<span>/10</span></Rate>
                        <Caption>{votes} votes</Caption>
                    </Ratings>
                    ) : (
                    <Ratings>
                        <Caption>{person ? "" : "No votes yet"} </Caption>
                    </Ratings>
                )}
                <p>
                    {description}
                </p>
            </div>
        </Info>
        </Container>
        </>
    )
}