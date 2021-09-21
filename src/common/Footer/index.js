import { PageFooter, PageFooterContainer, PageFooterLogo } from "./styled";

export const Footer = () => (
    <PageFooter>
        <PageFooterContainer>
            <PageFooterLogo />
            This product uses the TMDB API but is not endorsed or certified by TMDB.<br />
            Created by Pawlo1994, Krzysztof-Jaczewski and Eugen-save
        </PageFooterContainer>
    </PageFooter>
);