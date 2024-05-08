import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(50% - 6px);
`;
const Image = styled.img`
  width: 380px;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  color: black;
  font-weight: 600;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <>      
      <Container>
        <Link to={`/products/${item.category}`}>
          <Image src={item.image} />
        <Info>
          <Button>SHOP NOW</Button>
        </Info>
        </Link>
      </Container>
    </>
  );
};

export default CategoryItem;
