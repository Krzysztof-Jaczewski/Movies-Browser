import { Image } from "./styled";
import { Header } from "../../common/Header";
import NoResultImage from "../../images/picture.jpg";

export const NoResult = () => (
    <>
        <Header title={`Sorry, there are no results for "Muan"`} />
        <Image src={NoResultImage} />
    </>
);