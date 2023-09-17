import { useEffect, useState } from "react";

import { AdvertCatalog } from "components/AdvertCatalog/AdvertCatalog";

const Favorite = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorite")) || [];
    setCatalog(storedFavorites);
    console.log("useEffect  result:", storedFavorites);
  }, []);

  const changeIsFavorite = (id) => {
    const array = catalog.filter((elem) => elem.id !== id);

    setCatalog(array);
  };

  return (
    <main>
      <p>Favorite Page</p>
      <AdvertCatalog catalog={catalog} changeIsFavorite={changeIsFavorite} />
    </main>
  );
};

export default Favorite;
