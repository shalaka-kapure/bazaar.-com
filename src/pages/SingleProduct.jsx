import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { add, remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import Loader from "../components/Loader";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;
const ImgContainer = styled.div`
  flex: 0.5;
  align-self: center;
  justify-self: center;
`;
const Image = styled.img`
  width: 75%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 5px;
`;
const Title = styled.h1`
  font-weight: 600;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 400;
  font-style: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const ColorBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
`;
const FilterTitle = styled.span`
  font-style: 20px;
  font-weight: bold;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: ${(props) => props.color};
  margin: 0px 5px 5px 0px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: teal;
    color: white;
  }
`;

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addProduct, SetAddProduct] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setTimeout(async () => {
          const res = await fetch(`https://fakestoreapi.in/api/products/${id}`);
          const data = await res.json();
          console.log(data);
          setProduct(data.product);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
    SetAddProduct(true);
  };

  const handleRemove = (product) => {
    dispatch(remove(product.id));
    SetAddProduct(false);
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      {loading ? (
        <Loader />
      ) : (
        <Wrapper>
          <ImgContainer>
            <Image src={product.image} />
          </ImgContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>
              <strong>Product Description: </strong>
              {product.description}
            </Desc>
            <Price>
              <strong>M.R.P. </strong>${product.price}
            </Price>
            <br />
            <Desc>
              <strong>Brand: </strong>
              {product.brand}
            </Desc>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color:</FilterTitle>
                <ColorBox>
                  <FilterColor color={product.color}></FilterColor>
                </ColorBox>
              </Filter>
            </FilterContainer>
            <AddContainer>
              {addProduct ? (
                <AmountContainer>
                  <Add onClick={() => handleAdd(product)}/>
                  <Amount>1</Amount>
                  <Remove onClick={() => handleRemove(product)}/>
                </AmountContainer>
              ) : (
                <Button onClick={() => handleAdd(product)}>ADD TO CART</Button>
              )}
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      )}
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
