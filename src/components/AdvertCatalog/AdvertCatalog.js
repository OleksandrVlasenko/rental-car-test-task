import { AdvertItem } from "components/AdvertItem/AdvertItem";
import { Container } from "./AdvertCatalog.styled";

const AdvertCatalog = ({ catalog, changeIsFavorite }) => {
  return (
    <Container>
      {catalog.map((item) => (
        <AdvertItem
          key={item.id}
          item={item}
          changeIsFavorite={changeIsFavorite}
        />
      ))}
    </Container>
  );
};

export { AdvertCatalog };
