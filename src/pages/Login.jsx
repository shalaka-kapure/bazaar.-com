import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const TitleBar = styled.div`
  height: 40px;
  width: 100vw;
  background-color: #1d1b1b;
  color: white;
  padding-bottom: 10px;
  text-align: center;
  padding: 20px 20px;
`;
const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  border: 1px solid black;
`;
const Title = styled.h1`
  display: flex;
  font-style: 24px;
  font-weight: bold;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
font-weight:500;
`;
const Input = styled.input`
flex:1;
min-width:40%;
margin: 10px 0;
`;
const Agreement = styled.span`
font-size:12px;
margin: 10px 0;
`;
const Button = styled.button`
margin-top:10px; ;
padding: 15px 20px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: teal;
    color: white;
} 
`;
const LinkHref = styled.a`
padding: 5px;
cursor: pointer;

&:hover{
    color: teal;
    text-decoration: underline;
} 
`;
const linkStyle = {
  textDecoration: "none",
  color:"white"
};

const Login = () => {
  return (
    <>
      <TitleBar>
      <Link to="/" style={linkStyle}>
        <Logo>BAZAAR.</Logo>
      </Link>
      </TitleBar>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <FormGroup>
              <Label>Your Username</Label>
              <Input placeholder="Username" />
            </FormGroup>
            <FormGroup>
              <Label>Your password</Label>
              <Input placeholder="Password" />
            </FormGroup>
            <Button>Continue</Button>
            <Agreement>
              By continuing, you agree to Bazaar's <b>Conditions of Use</b> and <b>PRIVACY POLICY</b>.
            </Agreement>
            <LinkHref>Trouble Signing In? </LinkHref>
            <LinkHref>Create a new account</LinkHref>
          </Form>
        </Wrapper>
      </Container>
    </>

  );
}

export default Login;
