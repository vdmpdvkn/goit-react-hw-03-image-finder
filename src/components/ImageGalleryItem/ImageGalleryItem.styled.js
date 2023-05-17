import styled from '@emotion/styled';
export const Image = styled.img`
  object-fit: cover;
  width: 460px;
  height: 275px;

  &:hover {
    transform: scale(1.03);
  }
`;
export const GalleryItem = styled.li`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;
