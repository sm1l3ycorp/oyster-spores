import React from "react";
import PromoImage from "../../assets/promoBanner.jpg"
import styled from "styled-components";

const PromoBannerContainer = styled.div`
    display: flex;
    width: 100%;
    align-content: center;
    justify-content: center;
`

const PromoBanner = () => {
    return (
        <PromoBannerContainer> 
        <img src={PromoImage} style={{width: "100%", height: "25rem", opacity: "0.5"}} />
        </PromoBannerContainer>
    )
};

export default PromoBanner;