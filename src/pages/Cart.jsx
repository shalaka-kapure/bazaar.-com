import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { useSelector } from "react-redux";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 500;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopButton = styled.button`
  margin-top: 10px;
  padding: 15px 20px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: teal;
    color: white;
  }
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  padding: 10px;
  cursor: pointer;
  margin: 0 10px;
  &:hover {
    color: teal;
    text-decoration: underline;
  }
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductColor = styled.div`
  display: flex;
`;
const ProductColorName = styled.span``;
const ProductColorBox = styled.div`
  width: 20px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: ${(props) => props.color};
  margin-left: 3px;
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const ProductAmount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const ProductPrice = styled.div``;

const Hr = styled.hr`
  background-color: #f1eaea;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  margin-top: 10px;
`;
const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
margin: 30px 0;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 15px 20px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: teal;
    color: white;
  }
`;

const Cart = () => {
  const items = useSelector((state) => state.cart);

  console.log("cart items", items)

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Shopping Cart</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag({items.length})</TopText>
            <TopText>Your Wishlist(4)</TopText>
          </TopTexts>
          <TopButton>CHECKOUT</TopButton>
        </Top>
        <Bottom>
          <Info>
            {items.map((item, index) => (
              <>
            <Product key={index}>
            <ProductDetail>
              <Image src={item.image} />
              <Details>
                <ProductName>
                  <b>{item.title}</b>
                </ProductName>
                <ProductColor>
                  <ProductColorName>
                    <b>Color:</b>
                  </ProductColorName>
                  <ProductColorBox color={item.color}></ProductColorBox>
                </ProductColor>
                <ProductSize>
                  <b>Model:</b> {item.model}
                </ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                <Add />
                <ProductAmount>1</ProductAmount>
                <Remove />
              </ProductAmountContainer>
              <ProductPrice>M.R.P.: ${item.price}</ProductPrice>
            </PriceDetail>
          </Product>
            <Hr />
            </>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rs.90,800</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>Rs.80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>- Rs. 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>- Rs. 90,800</SummaryItemPrice>
            </SummaryItem>
            <Button>Proceed to Buy</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
