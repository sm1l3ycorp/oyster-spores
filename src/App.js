import Axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import PromoBanner from "./Components/PromoBanner/PromoBanner";
import Products from "./Components/Products/Products";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const AppContainer = styled.div`
  display: flex;
  flex-flow: column;
  background-color: #f8f8ff;
  min-height: 100vh;
  min-width: 100vh;
  flex-direction: column;
  caret-color: transparent;
`

const App = () => {

const [products, setProducts] = useState([]);

// const getProducts = async () => {
//   try {
//     const data = await Axios.get('.netlify/functions/products');
//     console.log(data.data[0])
//     setProducts(data.data[0]);
//   } catch (err) {
//     console.log(err);
//   }
// }

// useEffect(() => {
//   if (products.length === 0) {
//     getProducts();
//   }
// },[products])

  return (
    <AppContainer>
    <Header />
    <PromoBanner />
    <Products />
    </AppContainer>
  )
};

export default App;