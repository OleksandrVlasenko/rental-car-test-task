import {
	Container,
	StyledImage,
	TitleContainer,
	Title,
	Description,
} from "./AdvertItem.styled";

const AdvertItem = ({ item }) => {
	const {
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
	} = item;

	const [city, country] = address.split(", ").slice(-2);

	return (
		<Container>
			<StyledImage src={img} alt={model} />
			<TitleContainer>
				<Title>
					{make} <span>{model}</span>, {year}
				</Title>
				<Title>{rentalPrice}</Title>
			</TitleContainer>
      <Description>{city} | {country} | {rentalCompany}</Description>
      <Description>{type} | {mileage} | {functionalities[0]}</Description>
		</Container>
	);
};

export { AdvertItem };
