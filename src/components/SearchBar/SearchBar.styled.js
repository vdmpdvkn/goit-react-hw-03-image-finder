import styled from '@emotion/styled';
export const SearchForm = styled.form`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  opacity: 1;
  z-index: 2;
`;
export const Input = styled.input`
  width: 230px;
  height: 50px;
  border: 1px solid #212121;
  border-radius: 10px;
  outline: none;
  transition: border-color 250ms ease-in, box-shadow 250ms ease-in;
  font-size: 15px;
  &:hover,
  &:focus {
    border-color: black;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  }
`;
