import React from "react";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Container>
      <Header>
        <Logo>Register Karo</Logo>
        <Nav>
          <NavItem href="#services">Services</NavItem>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </Nav>
      </Header>
      <Hero>
        <HeroText>
          <h1>Welcome to Register Karo</h1>
          <p>Quickly register your business with ease and efficiency.</p>
          <HeroButton href="#get-started">Get Started</HeroButton>
        </HeroText>
      </Hero>
    </Container>
  );
};

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const Hero = styled.section`
  height: 100vh;
  background: url("https://via.placeholder.com/1500") no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  text-align: center;
`;

const HeroText = styled.div`
  max-width: 600px;
`;

const HeroButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff6200;
  color: #555;
  text-decoration: none;
  border-radius: 5px;
  font-size: 18px;
  &:hover {
    background-color: #ff8500;
  }
`;

export default HomePage;
