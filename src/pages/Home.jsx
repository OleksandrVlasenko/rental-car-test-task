import { Container, Header, LinkStyled } from "./Pages.styled";

const Home = () => {
  return (
    <Container>
      <Header>Drive Your Dreams – <br/> Rent Your Way to Adventure!</Header>
      <LinkStyled to={"catalog"}>Search cars</LinkStyled>
    </Container>
  );
};

export default Home;
