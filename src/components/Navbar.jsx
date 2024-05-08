import { Badge } from "@mui/material";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts, setSearchQuery } from "../store/productSlice";

const Container = styled.div`
  height: 60px;
  width: 100vw;
  background-color: #1d1b1b;
  color: white;
  padding-bottom: 10px;

  ${mobile({ width: "100vw" })}
`;
const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  background-color: white;
`;
const Input = styled.input`
  border: none;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 25px;
`;
const linkStyle = {
  textDecoration: "none",
  color: "white",
};

const Navbar = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); 
  const { data: products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
    console.log("data in navbar", products);
    // eslint-disable-next-line
  }, [dispatch]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(query);
    dispatch(setSearchQuery(query));
    console.log("query", query);
  };
  const handleSearchSubmit = () => {
    const foundProduct = products.find(
      (product) =>
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.brand.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
    );

    if (foundProduct) {
      navigate(`/products/${foundProduct.category}`);
    } else {
      console.log("Product not found!");
    }
  };

  console.log("navabar items", items);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input
              placeholder="Search"
              value={search}
              onChange={handleSearch}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearchSubmit();
                }
              }}
            />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={linkStyle}>
            <Logo>BAZAAR.</Logo>
          </Link>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/register" style={linkStyle}>
              REGISTER
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login" style={linkStyle}>
              SIGN IN
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cart" style={linkStyle}>
              <Badge badgeContent={items.length} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
