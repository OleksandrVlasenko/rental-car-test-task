import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "layout/SharedLayout";

const Home = lazy(() => import("pages/Home"));
const Catalog = lazy(() => import("pages/Catalog"));
const Favorite = lazy(() => import("pages/Favorite"));

function App() {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route index element={<Home />} />
				<Route path="catalog" element={<Catalog />} />
				<Route path="favorite" element={<Favorite />} />
				{/* <Route path="catalog/:id" element={<ProductDetails />} /> */}
				<Route path="*" element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;
