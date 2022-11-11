import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
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
  margin-left: 10px;
`
const FilterTitle = styled.span`
  font-style: 20px;
  font-weight: 300;
`;
const FilterColor = styled.div`
width: 20px;
height: 15px;
border-radius: 50%;
border: 1px solid black;
background-color: ${props => props.color};
margin: 0px 5px 10px 5px;
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

&:hover{
    background-color: teal;
    color: white;
}
`;

const SingleProduct = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="images/iphone.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Apple iPhone 14 Plus</Title>
          <Desc>
            16.95 cm (6.7-inch) Super Retina XDR display Advanced camera system
            for better photos in any light Cinematic mode now in 4K Dolby Vision
            up to 30 fps Action mode for smooth, steady, handheld videos Vital
            safety technology — Crash Detection calls for help when you cannot
          </Desc>
          <Price>Rs. 89,900</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <ColorBox>
              <FilterColor color="White"></FilterColor>
              <FilterColor color="Black"></FilterColor>
              <FilterColor color="Red"></FilterColor>
              <FilterColor color="Blue"></FilterColor>
              <FilterColor color="Purple"></FilterColor>
              </ColorBox>
            </Filter>
            <Filter>
              <FilterTitle>Size Name</FilterTitle>
              <FilterSize>
                <FilterSizeOption>128 GB</FilterSizeOption>
                <FilterSizeOption>256 GB</FilterSizeOption>
                <FilterSizeOption>512 GB</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
                <Add/>
                <Amount>1</Amount>
                <Remove/>            
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
