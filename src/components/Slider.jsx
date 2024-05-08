import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { Skeleton, Stack } from "@mui/material";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideindex * -100}vw);
  transition: all 1s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  padding-top: 45px;
  padding-left: 55px;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding-right: 35px;
`;

const InfoContainerSkeleton = styled.div`
  flex: 1;
  padding: 35px;
  height: 50%;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const Desc = styled.p`
  margin: 50px 0;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-style: 20px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #581558;
    color: white;
  }
`;

const Slider = () => {
  const dispatch = useDispatch();

  const { data: products, status } = useSelector((state) => state.product);
  
  useEffect(() => {
    dispatch(fetchProducts());
    console.log("data in slider", products);
  // eslint-disable-next-line  
  }, [dispatch]);

  const [slideindex, setSlideindex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideindex(slideindex > 0 ? slideindex - 1 : 4);
    } else {
      setSlideindex(slideindex < 4 ? slideindex + 1 : 0);
    }
  };

  const slides = products.slice(0, 5);

  console.log("products",products)
  console.log("slides", slides);

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      {status === "loading" ? (
      <Wrapper>
        <Slide bg="#b2b2ce">
          <ImgContainer>
            <Skeleton
              variant="rounded"
              width="100%"
              height="80%"
              animation="wave"
            />
          </ImgContainer>
          <InfoContainerSkeleton>
            <Stack spacing={2} height="100%">
              <Skeleton variant="rounded" width="100%" height="30%" animation="wave"/>
              <Skeleton variant="rounded" width="100%" height="30%" animation="wave"/>
            </Stack>
          </InfoContainerSkeleton>
        </Slide>
      </Wrapper>
       ) : (
        <Wrapper slideindex={slideindex}>
          {slides.splice(0, 5).map((item) => (
            <Slide bg="#b2b2ce" key={item.id}>
              <ImgContainer>
                <Image src={item.image} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title.substring(0, 80)}</Title>
                <Desc>
                  FLAT {item.discount} % OFF ON {item.brand} Products
                </Desc>
                <Link to={`/product/${item.id}`}>
                  <Button>SHOP NOW</Button>
                </Link>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
      )}r

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};
export default Slider;