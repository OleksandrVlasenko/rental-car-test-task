import { AdvertItem } from "components/AdvertItem/AdvertItem";
import { Container } from "./AdvertCatalog.styled";

const AdvertCatalog = ({ catalog, changeFavoriteList }) => {
  return (
    <Container>
      {catalog.map((item) => (
        <AdvertItem
          key={item.id}
          item={item}
          changeFavoriteList={changeFavoriteList}
        />
      ))}
    </Container>
  );
};

export { AdvertCatalog };
