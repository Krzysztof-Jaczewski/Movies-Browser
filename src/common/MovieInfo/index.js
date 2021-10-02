import { baseImgUrl, size } from "../../ApiParameters"
import { Container } from "../Container"
import { Caption, Rate, Ratings, StarIcon, Tag, Tags } from "../Tile/styled"
import { Description, Info, Poster, Span, Title, Wrapper } from "./styled"


export const MovieInfo = ({poster, title, description, date, countries, votes, rate, person, genres, fullDate}) => {

    return (
        <>
        <Container>
        <Wrapper>
            <Poster src={`${baseImgUrl}${size}${poster}`} alt=""  />
            <Description>
                <Title>
                    {title}
                </Title>
                <Info>
                    {date}
                </Info>
                <Info>
                    <Span>Production:</Span> {countries}
                </Info>
                <Info>
                    <Span>Release date:</Span> {fullDate}
                </Info>
                <Tags>
                    {genres && genres.map((genre) => <Tag key={genre}>{genre}</Tag>)}
                </Tags>
                {votes ? (
                    <Ratings>
                        <StarIcon />
                        <Rate movieInfo>{rate}<Span rate>/10</Span></Rate>
                        <Caption movieInfo>{votes} votes</Caption>
                    </Ratings>
                    ) : (
                    <Ratings>
                        <Caption>{person ? "" : "No votes yet"} </Caption>
                    </Ratings>
                )}
                <Info main>
                    {description}
                </Info>
            </Description>
        </Wrapper>
        </Container>
        </>
    )
}