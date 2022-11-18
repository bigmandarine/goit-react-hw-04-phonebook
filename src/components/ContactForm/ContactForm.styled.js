import styled from 'styled-components';
export const Form = styled.form`
  padding: 10px;
  width: 300px;
  border: 1px solid black;
  border-radius: 1px;
  input {
    display: flex;
    padding-left: 5px;
    margin-top: 5px;
    margin-bottom: 15px;
    border: 1px solid #d6d6d6;
    border-radius: 1px;
    outline-color: #87b8ed;
  }
  label {
  }
  button {
    background-color: #fffffffa;
    border: 1px solid #d6d6d6;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
    :focus,
    :hover {
      background-color: #5793f4;
      color: #fffffffa;
      border: 1px solid #5793f4;
    }
  }
`;
