import instance from "api/axiosSettings";
import { AdvertCatalog } from "components/AdvertCatalog/AdvertCatalog";
import { useEffect, useState } from "react";

const Catalog = () => {
  const [catalog, setCatalog] = useState([]);
  useEffect(() => {
    async function getCatalog() {
      try {
        const { data } = await instance.get("/", {
          params: { page: 1, limit: 8 },
        });

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

  const changeIsFavorite = (id) => {
    const array = catalog.map((elem) => {
      if (elem.id === id) {
        elem.isFavorite = !elem.isFavorite;
      }
      return elem;
    });

    setCatalog(array);
  };

  return (
    <main>
      <p>Catalog Page</p>
      <AdvertCatalog catalog={catalog} changeIsFavorite={changeIsFavorite} />
    </main>
  );
};

export default Catalog;
