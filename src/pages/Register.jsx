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
margin: 20px 0;
`;
const Button = styled.button`
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
const linkStyle = {
  textDecoration: "none",
  color:"white"
};

const Register = () => {
  return (
    <>
      <TitleBar>
      <Link to="/bazaar.com" style={linkStyle}>
        <Logo>BAZAAR.</Logo>
      </Link>  
      </TitleBar>
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <FormGroup>
              <Label>Your name</Label>
              <Input placeholder="Name" />
            </FormGroup>
            <FormGroup>
              <Label>Your last name</Label>
              <Input placeholder="Last Name" />
            </FormGroup>
            <FormGroup>
              <Label>Choose a Username</Label>
              <Input placeholder="Username" />
            </FormGroup>
            <FormGroup>
              <Label>Your email</Label>
              <Input placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label>Choose a password</Label>
              <Input placeholder="Password" />
            </FormGroup>
            <FormGroup>
              <Label>Confirm your password</Label>
              <Input placeholder="Confirm Password" />
            </FormGroup>
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
