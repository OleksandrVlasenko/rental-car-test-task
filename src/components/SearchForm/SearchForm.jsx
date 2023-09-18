import { useState } from "react";
import Select from "react-select";

import { customStyles } from "./selectStyles";
import { makes, priceList } from "constants/constants";
import {
  Form,
  InputsContainer,
  InputBox,
  Label,
  SubmitButton,
} from "./SearchForm.styled";

const SearchForm = ({ onHandleSearchForm }) => {
  const [carBrand, setCarBrand] = useState(null);
  const [pricePerHour, setPricePerHour] = useState(null);
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "mileageFrom":
        setMileageFrom(value);
        break;
      case "mileageTo":
        setMileageTo(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchForm = {};
    carBrand && (searchForm.carBrand = carBrand.value);
    pricePerHour && (searchForm.pricePerHour = pricePerHour.value);
    mileageFrom !== "" && (searchForm.mileageFrom = Number(mileageFrom));
    mileageTo !== "" && (searchForm.mileageTo = Number(mileageTo));
    console.log("handleSubmit  searchForm:", searchForm);

    onHandleSearchForm(searchForm);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="carBrand">
        Car brand
        <Select
          name="carBrand"
          id="carBrand"
          placeholder="Enter the text"
          defaultValue={carBrand}
          onChange={setCarBrand}
          options={makes}
          isClearable
          styles={customStyles}
        />
      </Label>
      <Label htmlFor="pricePerHour">
        Price/ 1 hour
        <Select
          name="pricePerHour"
          id="pricePerHour"
          placeholder="To $"
          defaultValue={pricePerHour}
          onChange={setPricePerHour}
          options={priceList}
          isClearable
          styles={customStyles}
        />
      </Label>
      <Label htmlFor="mileage">
        Сar mileage / km
        <InputsContainer>
          <InputBox
            borderRadius="14px 0px 0px 14px"
            borderRigth="1px solid rgba(138, 138, 137, 0.2);"
          >
            <span>From&nbsp;</span>
            <input
              type="number"
              name="mileageFrom"
              onChange={handleChange}
              value={mileageFrom}
              id="mileage"
              aria-label="Mileage From"
            />
          </InputBox>
          <InputBox borderRadius="0px 14px 14px 0px">
            <span>To&nbsp;</span>
            <input
              type="number"
              name="mileageTo"
              onChange={handleChange}
              value={mileageTo}
              id="mileage"
              aria-label="Mileage To"
            />
          </InputBox>
        </InputsContainer>
      </Label>

      <SubmitButton type="submit" aria-label="Submit">
        Search
      </SubmitButton>
    </Form>
  );
};

export { SearchForm };
