import styled from "styled-components";
import Products from "../components/Products";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const Container = styled.div`
  overflow-x: hidden;
`;

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
        const res = await fetch(
          `https://fakestoreapi.in/api/products/category?type=${category}`
        );
        const data = await res.json();
        setProducts(data.products);
        setLoading(false);
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

  const filteredProducts = products.filter((product) => {
    // Filter based on selected color
    if (filter.color && product.color !== filter.color) {
      return false;
    }
    return true;
  });

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "asc") {
      return a.price - b.price;
    } else if (sort === "desc") {
      return b.price - a.price;
    }
    return 0; // Default sorting is newest
  });

  return (
    <Container>
      <Title>
        Showing results for{" "}
        {category.charAt(0).toUpperCase() + category.slice(1)} category
      </Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Select Color</Option>
            <Option value="White">White</Option>
            <Option value="Black">Black</Option>
            <Option value="Red">Red</Option>
            <Option value="Yellow">Yellow</Option>
            <Option value="Blue">Blue</Option>
            <Option value="Green">Green</Option>
            <Option value="Pink">Pink</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Relevant first</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      {loading ? (
        <Loader />
      ) : (
        <Products cat={cat} filter={filter} sort={sort} products={sortedProducts} />
      )}
    </Container>
  );
};

export default ProductList;
