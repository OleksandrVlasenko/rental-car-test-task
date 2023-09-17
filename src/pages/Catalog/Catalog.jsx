import instance from "api/axiosSettings";
import { useEffect, useState } from "react";

import { AdvertCatalog } from "components/AdvertCatalog/AdvertCatalog";
import { LoadMore } from "components/LoadMore/LoadMore";
import { Container } from "./Catalog.styled";

const Catalog = ({ onOpenModal }) => {
  const [catalog, setCatalog] = useState([]);
  const [page, setPage] = useState(1);
  console.log("Catalog  page:", page)
  const [total, setTotal] = useState(0);
  const [isShownLoadMore, setIsShownLoadMore] = useState(false);

  useEffect(() => {
    async function getCatalog() {
      try {
        // const { data } = await instance.get("/", {
        //   params: { page, limit: 8 },
        // });

        //Цей запит роблю для того, щоб отримати загальну кількість елементів, так як я не знайшов, як з mockapi.io їх отримати в одному запиті
        const { data } = await instance.get("/");
        setTotal(data.length);

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

        console.log("useEffect  result:", data);

        setCatalog(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getCatalog();
  }, []);

  useEffect(() => {
    if (catalog.length > 0) {
      setIsShownLoadMore(true);
    }
    if (catalog.length === total) {
      setIsShownLoadMore(false);
    }
  }, [catalog, total]);

  const changeFavoriteList = (id) => {
    const array = catalog.map((elem) => {
      if (elem.id === id) {
        elem.isFavorite = !elem.isFavorite;
      }
      return elem;
    });

    setCatalog(array);
  };

  return (
    <Container>
      <p>Catalog Page</p>
      <AdvertCatalog
        catalog={catalog}
        changeFavoriteList={changeFavoriteList}
        onOpenModal={onOpenModal}
      />
      {isShownLoadMore && <LoadMore setPage={setPage} />}
    </Container>
  );
};

export default Catalog;
