import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { ModalContainer } from "components/ModalContainer/ModalContainer";
import { Modal } from "components/Modal/Modal";

import { Header, Navigation, LinkStyled } from "./SharedLayout.styled";

export const SharedLayout = ({ onToogleModal, onItem, isShowModal }) => {
  return (
    <>
      <Header>
        <Navigation>
          <LinkStyled to="/">Home</LinkStyled>
          <LinkStyled to="catalog">Catalog</LinkStyled>
          <LinkStyled to="favorite">Favorite</LinkStyled>
        </Navigation>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      {isShowModal && (
        <ModalContainer onClose={onToogleModal}>
          <Modal onItem={onItem} toogleModal={onToogleModal} />
        </ModalContainer>
      )}
    </>
  );
};
