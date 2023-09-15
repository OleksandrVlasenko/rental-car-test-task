import { AdvertItem } from "components/AdvertItem/AdvertItem";
import { Container } from "./AdvertCatalog.styled";

const AdvertCatalog = ({ catalog }) => {
	return (
		<Container>
			{catalog.map(item => (
				<AdvertItem key={item.id} item={item} />
			))}
		</Container>
	);
};

export { AdvertCatalog };
