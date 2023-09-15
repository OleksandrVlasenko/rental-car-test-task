import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
// import { Link } from "./SharedLayout.styled";

export const SharedLayout = () => {
	return (
		<>
			<header>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/catalog">Catalog</Link>
					<Link to="/favorite">Favorite</Link>
				</nav>
			</header>
			<Suspense fallback={<div>Loading page...</div>}>
				<Outlet />
			</Suspense>
		</>
		// <Container>
		// 	<Header>
		// 		<Logo>
		// 			<span role="img" aria-label="computer icon">
		// 				💻
		// 			</span>{" "}
		// 			GoMerch Store
		// 		</Logo>
		// 		<nav>
		// 			<Link to="/" end>
		// 				Home
		// 			</Link>
		// 			<Link to="/about">About</Link>
		// 			<Link to="/products">Products</Link>
		// 		</nav>
		// 	</Header>
		// 	<Outlet />
		// </Container>
	);
};
