import { makes, priceList } from "constants/constants";
import { useState } from "react";

const SearchForm = ({ onHandleSearchForm }) => {
  const [carBrand, setCarBrand] = useState("");
  const [pricePerHour, setPricePerHour] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "carBrand":
        setCarBrand(value);
        break;
      case "pricePerHour":
        setPricePerHour(value);
        break;
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
    carBrand !== "" && (searchForm.carBrand = carBrand);
    pricePerHour !== "" && (searchForm.pricePerHour = pricePerHour);
    mileageFrom !== "" && (searchForm.mileageFrom = mileageFrom);
    mileageTo !== "" && (searchForm.mileageTo = mileageTo);

    onHandleSearchForm(searchForm);

    reset();
  };

  const reset = () => {
    setCarBrand("");
    setPricePerHour("");
    setMileageFrom("");
    setMileageTo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="carBrand">
        Car brand
        <select name="carBrand" id="carBrand" onChange={handleChange}>
          {makes.map((elem, index) => (
            <option value={elem} key={index}>
              {elem}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="pricePerHour">
        Price/ 1 hour
        <select name="pricePerHour" id="pricePerHour" onChange={handleChange}>
          {priceList.map((elem, index) => (
            <option value={elem} key={index}>
              {elem}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="mileage">
        Сar mileage / km
        <input
          type="number"
          name="mileageFrom"
          onChange={handleChange}
          value={mileageFrom}
          id="mileage"
          aria-label="Mileage From"
        />
        <input
          type="number"
          name="mileageTo"
          onChange={handleChange}
          value={mileageTo}
          id="mileage"
          aria-label="Mileage To"
        />
      </label>

      <button type="submit" aria-label="Submit">
        Search
      </button>
    </form>
  );
};

export { SearchForm };
