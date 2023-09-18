import { Container, Header, LinkStyled } from "./Pages.styled";

const Home = () => {
  return (
    <Container alignItems="center"> 
      <Header>
        Drive Your Dreams – <br /> Rent Your Way to Adventure!
      </Header>
      <LinkStyled to={"catalog"} buttonWidth="274px">
        Search cars
      </LinkStyled>
    </Container>
  );
};

export default Home;
