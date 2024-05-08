import {
  FavoriteBorder,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  transition: all 0.5 ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 10px 15px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b2b2ce;
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 310px;
  height: 300px;
  border-radius: 50%;
  position: absolute;
  background-color: white;
`;

const Image = styled.img`
  height: 55%;
  z-index: 2;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5 ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const ProductContainer = styled.div`
display:flex;
flex-direction: column;
`;
const ProductDetails = styled.div`
  bottom: 0px;
  text-align: center;
  position: absolute;
  background-color: white;
  width: 100%;
  height: 50px;
`;


const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.image} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Link to={`/product/${item.id}`}>
        <Icon>
          <SearchOutlined />
        </Icon>
        </Link>
        <Icon>
          <FavoriteBorder />
        </Icon>
      </Info>
      <ProductDetails>
        <div>{item.title.substring(0,40)}</div>
        <div>${item.price}</div>
      </ProductDetails>
    </Container>
  );
};

export default Product;
