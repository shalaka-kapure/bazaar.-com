import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-style: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  const { category } = useParams();

  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setTimeout(async () => {
          const res = await fetch(
            `https://fakestoreapi.in/api/products/category?type=${category}`
          );
          const data = await res.json();
          console.log(data);
          setProducts(data.products);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [category]);
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filter,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>
        Showing results for{" "}
        {category.charAt(0).toUpperCase() + category.slice(1)} category
      </Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Yellow</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Pink</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      {loading ? (
        <Loader />
      ) : (
      <Products cat={cat} filter={filter} sort={sort} products={products} />
    )}
      <Footer />
    </Container>
  );
};

export default ProductList;
