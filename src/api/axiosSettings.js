import axios from "axios";

const instance = axios.create({
	baseURL: "https://6499583879fbe9bcf83f0d64.mockapi.io/rental-cars",
	timeout: 3000,
});

export default instance