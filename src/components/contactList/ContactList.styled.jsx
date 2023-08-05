import styled from '@emotion/styled';

export const ContactListUl = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  padding: 12px;
  margin-top: 0px;
  background-color: #efefef;
  border: 1px solid;
  border-color: transparent blue blue blue;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ContactButton = styled.button`
  padding: 5px 20px;
  font-size: 14px;
  border-radius: 10px;
  border: 1px solid;
  :hover {
    background-color: skyblue;
  }
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const ButtonsBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;
