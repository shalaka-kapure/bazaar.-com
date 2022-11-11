import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Title = styled.h1`
  display: flex;
  padding: 20px;
  justify-content: center;
`;

const Categories = () => {
  return (
    <>
      <Title> Women's Fashion and Clothing</Title>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Categories;
