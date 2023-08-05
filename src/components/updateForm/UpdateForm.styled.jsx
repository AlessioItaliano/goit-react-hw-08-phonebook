import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  padding: 12px;
  background-color: #efefef;
  border: 1px solid blue;

  border-radius: 10px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 10px;
  color: black;
  font-size: 20px;
`;

export const FormInput = styled.input`
  padding: 8px 12px;
  cursor: pointer;
`;

export const FormBtn = styled.button`
  padding: 8px 12px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 10px;
  border: 1.5px solid black;
  font-size: 21px;
  background: linear-gradient(skyblue, 90%, grey);
  :hover {
    background: linear-gradient(skyblue, 30%, lightgreen);
  }
`;
