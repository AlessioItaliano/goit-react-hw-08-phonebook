import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 350px;
  padding: 22px 36px;

  color: #000000;
  background: #efefef;
  border-radius: 18px;
  border: 1px solid #efefef;
`;

export const Button = styled.button`
  font-weight: 600;
  font-size: 18px;

  margin-top: 24px;
  width: 350px;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 10px;
  border: 1px solid;
  cursor: pointer;
  background: linear-gradient(skyblue, 90%, grey);
  :hover {
    background: linear-gradient(skyblue, 30%, lightgreen);
  }
`;
