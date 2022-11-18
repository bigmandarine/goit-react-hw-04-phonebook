import styled from 'styled-components';
export const Ul = styled.ul`
  li:not(:last-child) {
    margin-bottom: 10px;
  }
  button {
    margin-left: 10px;
    padding: 5px 10px;

    background-color: #fffffffa;
    border: 1px solid #d6d6d6;
    border-radius: 4px;

    font-size: 14px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    cursor: pointer;
    :focus,
    :hover {
      background-color: #5793f4;
      color: #fffffffa;
      border: 1px solid #5793f4;
    }
  }
`;
