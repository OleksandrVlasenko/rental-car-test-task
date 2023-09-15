import {
	Container,
	StyledImage,
	TitleContainer,
	Title,
	DescriptionContainer,
	Description,
} from "./AdvertItem.styled";
import { Button } from "components/Button/Button";

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
