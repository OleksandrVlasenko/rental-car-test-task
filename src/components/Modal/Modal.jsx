import { Button } from "components/Button/Button";
import { Container, TitleContainer, MainDescription, RentalConditionsContainer, RentalConditionDescription } from "./Modal.styled";
import {
  Description,
  DescriptionContainer,
  StyledImage,
  Title,
} from "components/AdvertItem/AdvertItem.styled";

const item = {
  id: 9582,
  year: 2008,
  make: "Buick",
  model: "Enclave",
  type: "SUV",
  img: "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg",
  description:
    "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
  fuelConsumption: "10.5",
  engineSize: "3.6L V6",
  accessories: ["Leather seats", "Panoramic sunroof", "Premium audio system"],
  functionalities: ["Power liftgate", "Remote start", "Blind-spot monitoring"],
  rentalPrice: "$40",
  rentalCompany: "Luxury Car Rentals",
  address: "123 Example Street, Kiev, Ukraine",
  rentalConditions:
    "Minimum age: 25\nValid driver's license\nSecurity deposit required",
  mileage: 5858,
};

const {
  id,
  img,
  model,
  make,
  year,
  rentalPrice,
  accessories,
  address,
  rentalCompany,
  type,
  mileage,
  functionalities,
  isFavorite,
  fuelConsumption,
  engineSize,
  rentalConditions,
} = item;

const [city, country] = address.split(", ").slice(-2);
const rentalConditionsArray = rentalConditions.split("\n");

const Modal = () => {
  return (
    <Container>
      <StyledImage
        src={img}
        alt={model}
        imageWidth="461px"
        imageHeight="248px"
      ></StyledImage>
      <TitleContainer>
        <Title fontSize="18px">
          {make} <span>{model}</span>, {year}
        </Title>
      </TitleContainer>
      <DescriptionContainer marginBottom="14px">
        <Description>
          {city} | {country} | id: {id} | Year:{year} | type: {type}
        </Description>
        <Description>
          Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
        </Description>
      </DescriptionContainer>
      <MainDescription marginBottom="24px" fontWeight="400">
        The Buick Enclave is a stylish and spacious SUV known for its
        comfortable ride and luxurious features.
      </MainDescription>
      <MainDescription marginBottom="8px">
        Accessories and functionalities:
      </MainDescription>
      <DescriptionContainer marginBottom="24px">
        <Description>{accessories.join(" | ")}</Description>
        <Description>{functionalities.join(" | ")}</Description>

        <Description></Description>
      </DescriptionContainer>
      <MainDescription marginBottom="8px">Rental Conditions: </MainDescription>
      <RentalConditionsContainer>
        <RentalConditionDescription>
          Minimum age: <span>{rentalConditionsArray[0].slice(-2)}</span>
        </RentalConditionDescription>
        <RentalConditionDescription>
          {rentalConditionsArray[1]}
        </RentalConditionDescription>
        <RentalConditionDescription>
          {rentalConditionsArray[2]}
        </RentalConditionDescription>
        <RentalConditionDescription>
          Mileage: <span>{Number(mileage).toLocaleString("en-US")}</span>
        </RentalConditionDescription>
        <RentalConditionDescription>
          Price: <span>{rentalPrice}</span>
        </RentalConditionDescription>
      </RentalConditionsContainer>
      <Button buttonWidth="168px">Rental car</Button>
    </Container>
  );
};

export { Modal };
