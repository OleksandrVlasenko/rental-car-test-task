import { Button } from "components/Button/Button";
import {
  Container,
  TitleContainer,
  MainDescription,
  RentalConditionsContainer,
  RentalConditionDescription,
} from "./Modal.styled";
import {
  Description,
  DescriptionContainer,
  StyledImage,
  Title,
} from "components/AdvertItem/AdvertItem.styled";

const Modal = ({
  toogleModal,
  onItem: {
    id,
    img,
    model,
    make,
    year,
    rentalPrice,
    accessories,
    address,
    type,
    mileage,
    functionalities,
    fuelConsumption,
    engineSize,
    rentalConditions,
  },
}) => {
  const [city, country] = address.split(", ").slice(-2);
  const rentalConditionsArray =
    rentalConditions && rentalConditions.split("\n");

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
      <Button toogleModal={toogleModal} buttonWidth="168px">Rental car</Button>
    </Container>
  );
};

export { Modal };
