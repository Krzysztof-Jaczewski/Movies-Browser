import { PageFooter, PageFooterContainer, PageFooterLogo } from "./styled";

export const Footer = () => (
    <PageFooter>
        <PageFooterContainer>
            <PageFooterLogo />
            This product uses the TMDB API but is not endorsed or certified by TMDB
        </PageFooterContainer>
    </PageFooter>
);