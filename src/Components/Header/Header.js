import React from "react";
import styled from "styled-components";
import Logo from "../../assets/banner.png";
import Cart from "../Cart/Cart";

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    background-color: #f8f8ff;
`
const Header = () => {
    return (
        <HeaderContainer>
        <img src={Logo} alt="oysterspores.com" title="oysterspores.com" />
        <Cart />
        </HeaderContainer>
    )
}

export default Header;