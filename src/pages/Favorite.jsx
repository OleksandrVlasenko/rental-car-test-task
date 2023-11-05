import { useEffect, useState } from "react";

import { AdvertCatalog } from "components/AdvertCatalog/AdvertCatalog";
import { LoadMore } from "components/LoadMore/LoadMore";
import { Container } from "pages/Pages.styled";

const Favorite = ({ onOpenModal }) => {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalogWithPagination, setFilteredCatalogWithPagination] =
    useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isShownLoadMore, setIsShownLoadMore] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorite")) || [];
    setCatalog(storedFavorites);
    setTotal(storedFavorites.length);
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
    if (total === 0) {
      setFilteredCatalogWithPagination([]);
      return;
    }
    const startIndex = 0;
    const endIndex = (page - 1) * 8 + 8 <= total ? (page - 1) * 8 + 8 : total;

    const itemsToDisplay = catalog.slice(startIndex, endIndex);
    setFilteredCatalogWithPagination(itemsToDisplay);
  }, [page, total, catalog]);

  const changeFavoriteList = (id) => {
    const array = catalog.filter((elem) => elem.id !== id);
    setTotal(array.length);
    setCatalog(array);
  };

  return (
    <Container>
      <AdvertCatalog
        catalog={filteredCatalogWithPagination}
        changeFavoriteList={changeFavoriteList}
        onOpenModal={onOpenModal}
      />
      {isShownLoadMore && <LoadMore setPage={setPage} />}
    </Container>
  );
};

export default Favorite;
