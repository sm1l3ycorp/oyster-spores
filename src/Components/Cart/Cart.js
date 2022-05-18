import React from "react";
import { Cart3 } from 'react-bootstrap-icons';
import styled from "styled-components";

const CartContainer = styled.div`
    margin-top: 2rem;
    margin-left: auto
`

const CartIconContainer = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #f8f8ff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #ffffff;
  }
`

const Cart = () => {
    return (
        <CartContainer>
            <CartIconContainer>
                <Cart3 size={42} style={{marginTop: "2.8rem", marginBottom: "3rem"}} />
            </CartIconContainer>
        </CartContainer>
    )
}

export default Cart;