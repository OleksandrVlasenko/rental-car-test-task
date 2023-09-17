import instance from "api/axiosSettings";
import { useEffect, useState } from "react";

import { AdvertCatalog } from "components/AdvertCatalog/AdvertCatalog";
import { LoadMore } from "components/LoadMore/LoadMore";
import { Container } from "./Catalog.styled";
import { SearchForm } from "components/SearchForm/SearchForm";

const Catalog = ({ onOpenModal }) => {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const [filteredCatalogWithPagination, setFilteredCatalogWithPagination] =
    useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isShownLoadMore, setIsShownLoadMore] = useState(false);
  const [searchForm, setSearchForm] = useState({});

  useEffect(() => {
    async function getCatalog() {
      try {
        const { data } = await instance.get("/");

        const storedFavorites =
          JSON.parse(localStorage.getItem("favorite")) || [];

        const storedFavoritesMap = {};
        storedFavorites.forEach((elem) => {
          storedFavoritesMap[elem.id] = elem;
        });

        data.forEach((elem) => {
          if (storedFavoritesMap[elem.id]) {
            elem.isFavorite = true;
          } else {
            elem.isFavorite = false;
          }
        });

        setCatalog(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getCatalog();
  }, []);

  useEffect(() => {
    if (filteredCatalogWithPagination.length > 0) {
      setIsShownLoadMore(true);
    }
    if (filteredCatalogWithPagination.length === total) {
      setIsShownLoadMore(false);
    }
  }, [filteredCatalogWithPagination, total]);

  useEffect(() => {
    if (Object.keys(searchForm).length === 0) {
      setTotal(catalog.length);
      setFilteredCatalog(catalog);
    } else {
      const filteredCatalog = catalog.filter((elem) => {
        return (
          (!searchForm.carBrand || elem.make === searchForm.carBrand) &&
          (!searchForm.pricePerHour ||
            elem.rentalPrice <= searchForm.pricePerHour) &&
          (!searchForm.mileageFrom || elem.mileage >= searchForm.mileageFrom) &&
          (!searchForm.mileageTo || elem.mileage <= searchForm.mileageTo)
        );
      });

      setTotal(filteredCatalog.length);
      setFilteredCatalog(filteredCatalog);
    }
  }, [catalog, searchForm]);

  useEffect(() => {
    if (total === 0) {
      return;
    }
    const startIndex = 0;
    const endIndex = (page - 1) * 8 + 8 <= total ? (page - 1) * 8 + 8 : total;

    const itemsToDisplay = filteredCatalog.slice(startIndex, endIndex);
    setFilteredCatalogWithPagination(itemsToDisplay);
  }, [page, total, filteredCatalog]);

  const changeFavoriteList = (id) => {
    const array = catalog.map((elem) => {
      if (elem.id === id) {
        elem.isFavorite = !elem.isFavorite;
      }
      return elem;
    });

    setCatalog(array);
  };

  const handleSearchForm = (searchForm) => {
    setSearchForm(searchForm);
    setPage(1);
  };

  return (
    <Container>
      <SearchForm onHandleSearchForm={handleSearchForm} />
      <AdvertCatalog
        catalog={filteredCatalogWithPagination}
        changeFavoriteList={changeFavoriteList}
        onOpenModal={onOpenModal}
      />
      {isShownLoadMore && <LoadMore setPage={setPage} />}
    </Container>
  );
};

export default Catalog;
