import instance from "api/axiosSettings";
import { AdvertCatalog } from "components/AdvertCatalog/AdvertCatalog";
import { useEffect, useState } from "react";

const Catalog = () => {
	const [catalog, setCatalog] = useState([]);
	useEffect(() => {
		async function getCatalog() {
			try {
				const { data } = await instance.get("/");
				console.log("useEffect  result:", data);
				setCatalog(data);
			} catch (error) {
				console.log(error.message);
			}
		}
		getCatalog();
	}, []);

	return (
		<main>
			<p>Catalog Page</p>
			<AdvertCatalog catalog={catalog} />
		</main>
	);
};

export default Catalog;
