import { AdvertItem } from "components/AdvertItem/AdvertItem";

const AdvertCatalog = ({ catalog }) => {
	return catalog.map(item => <AdvertItem key={item.id} item={item} />);
};

export { AdvertCatalog };
