import instance from "api/axiosSettings";

async function getCatalog() {
	return await instance.get("/");
}

export {getCatalog}
