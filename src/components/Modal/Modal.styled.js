import styled from '@emotion/styled';
export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  opacity: 1;
  overflow-y: scroll;

  background-color: rgb(129, 124, 124, 0.3);
`;
export const StyledModal = styled.div`
  border-radius: 21px;
  overflow: hidden;

  background-color: #ffffff;
  text-align: left;
  height: auto;
  width: 1000px;
`;
