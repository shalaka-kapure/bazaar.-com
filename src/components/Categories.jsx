import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  display: flex;
  padding: 20px;
  justify-content: center;
`;

const Categories = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const categoryRes = await fetch(
          "https://fakestoreapi.in/api/products/category"
        );
        const categoryData = await categoryRes.json();
        console.log(categoryData.categories);
  
        const productsPromises = categoryData.categories.map(async (category) => {
          const productRes = await fetch(
            `https://fakestoreapi.in/api/products/category?type=${category}`
          );
          const productData = await productRes.json();
          const randomIndex = Math.floor(Math.random() * productData.products.length);
          return productData.products[randomIndex];
        });

        const categoryProducts = await Promise.all(productsPromises);
  
        setCategoryProducts(categoryProducts);
        console.log("categoryProducts",categoryProducts)
      } catch (error) {
        console.error("Error fetching category products:", error);
      }
    };
  
    fetchCategoryProducts();
  }, []);
  
  return (
    <>
      <Title>Popular Categories</Title>
      <Container>
      {categoryProducts.map((product, index) => (
          <CategoryItem item={product} key={index} />
        ))}
      </Container>
    </>
  );
};

export default Categories;
