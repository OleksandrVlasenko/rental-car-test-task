import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  Container,
  IconsContainer,
  StyledImage,
  TitleContainer,
  Title,
  DescriptionContainer,
  Description,
} from "./AdvertItem.styled";
import { Button } from "components/Button/Button";

const AdvertItem = ({ item, changeIsFavorite }) => {
  const {
    id,
    img,
    model,
    make,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
    isFavorite,
  } = item;

  const [city, country] = address.split(", ").slice(-2);

  const handleClickFavorite = () => {
		const storedFavorites = JSON.parse(localStorage.getItem("favorite")) || [];

		if (!isFavorite) {
      storedFavorites.unshift({...item, isFavorite: !isFavorite});
    } else {
      const index = storedFavorites.findIndex((item) => item.id === id);

      if (index !== -1) {
        storedFavorites.splice(index, 1);
      }
    }

    localStorage.setItem("favorite", JSON.stringify(storedFavorites));

    changeIsFavorite(id);
  };

  return (
    <Container>
      <IconsContainer onClick={handleClickFavorite}>
        {isFavorite ? (
          <FaHeart style={{ color: "var(--primary-color)" }} />
        ) : (
          <FaRegHeart style={{ color: "var(--secondary-text-color)" }} />
        )}
      </IconsContainer>
      <StyledImage src={img} alt={model} />
      <TitleContainer>
        <Title>
          {make} <span>{model}</span>, {year}
        </Title>
        <Title>{rentalPrice}</Title>
      </TitleContainer>
      <DescriptionContainer>
        <Description>
          {city} | {country} | {rentalCompany}
        </Description>
        <Description>
          {type} | {mileage} | {functionalities[0]}
        </Description>
      </DescriptionContainer>
      <Button buttonWidth={"274 px"}>Learn more</Button>
    </Container>
  );
};

export { AdvertItem };
