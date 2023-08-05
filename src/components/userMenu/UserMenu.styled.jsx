import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const Button = styled.button`
  padding: 5px 5px;
  border-radius: 10px;
  border: 1.5px solid black;
  font-size: 18px;
   background: linear-gradient(#fff, 70%, blue);
  cursor: pointer;
  :hover {
    background: linear-gradient(skyblue, 60%, red);
`;
