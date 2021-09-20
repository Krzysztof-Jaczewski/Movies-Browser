import { LoadingImage } from "./styled";
import { Header } from "../../common/Header";

export const LoadingPage = () => (
    <>
        <Header title={`Search results for "Mulan"`} />
        <LoadingImage />
    </>
);