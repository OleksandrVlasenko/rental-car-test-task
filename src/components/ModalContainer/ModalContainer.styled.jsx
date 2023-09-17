import styled from "@emotion/styled";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 17, 0.4);
  // opacity: 1;
  // cursor: pointer;
  // z-index: 20000;
  // padding: 94px 15px;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* width: 400px;
  height: 200px; */

  /* overflow-y: auto;
  overflow-x: hidden; */
  /* background-color: var(--background-color); */
`;

export { ModalBackdrop, ModalContent };
