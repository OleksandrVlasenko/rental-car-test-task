import { lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "layout/SharedLayout";

const Home = lazy(() => import("pages/Home"));
const Catalog = lazy(() => import("pages/Catalog"));
const Favorite = lazy(() => import("pages/Favorite"));

function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [item, setItem] = useState({});

  const toogleModal = () => {
    setIsShowModal((isShowModal) => !isShowModal);
  };

  const getItem = (item) => {
    setItem(item);
    toogleModal();
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <SharedLayout
            onToogleModal={toogleModal}
            onItem={item}
            isShowModal={isShowModal}
          />
        }
      >
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog onOpenModal={getItem} />} />
        <Route path="favorite" element={<Favorite onOpenModal={getItem} />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
