import React from "react";
import styled from "styled-components";
import { CardGroup, Card } from "react-bootstrap";
import Prints from "../../assets/prints.PNG";
import Swabs from "../../assets/swab.jpg";
import Syringes from "../../assets/syringe.png";

const ProductsContainer = styled.div`
    height: 80%;
`

const Products = () => {
    return (
        <ProductsContainer>
            <CardGroup>
                <Card style={{hover: "red"}}>
                    <Card.Img variant="top" src={Prints} style={{width: "15rem", marginLeft: "auto", marginRight: "auto"}} />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Swabs} style={{width: "15rem", marginLeft: "auto", marginRight: "auto"}} />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Syringes} style={{width: "15rem", marginLeft: "auto", marginRight: "auto"}} />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                </Card>
        </CardGroup>
        </ProductsContainer>
    )
};

export default Products;