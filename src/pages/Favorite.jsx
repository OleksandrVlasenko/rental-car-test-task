import { useEffect, useState } from "react";

import { AdvertCatalog } from "components/AdvertCatalog/AdvertCatalog";
// import { LoadMore } from "components/LoadMore/LoadMore";

const Favorite = ({ onOpenModal }) => {
  const [catalog, setCatalog] = useState([]);
  // const [page, setPage] = useState(1);
  // const [total, setTotal] = useState(0);
  // const [isShownLoadMore, setIsShownLoadMore] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorite")) || [];
    setCatalog(storedFavorites);
    // setTotal(storedFavorites.length);
    console.log("useEffect  result:", storedFavorites);
  }, []);

  const changeFavoriteList = (id) => {
    const array = catalog.filter((elem) => elem.id !== id);

    setCatalog(array);
  };

  // useEffect(() => {
  //   if (catalog.length > 0) {
  //     setIsShownLoadMore(true);
  //   }
  //   if (catalog.length === total) {
  //     setIsShownLoadMore(false);
  //   }
  // }, [catalog, total]);

  return (
    <main>
      <p>Favorite Page</p>
      <AdvertCatalog
        catalog={catalog}
        changeFavoriteList={changeFavoriteList}
        onOpenModal={onOpenModal}
      />
    </main>
  );
};

export default Favorite;
