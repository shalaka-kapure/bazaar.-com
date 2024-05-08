import { Badge } from "@mui/material"; 
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const items = useSelector((state) => state.cart);
  console.log("navabar items", items)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
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
