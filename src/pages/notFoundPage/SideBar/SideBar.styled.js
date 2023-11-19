import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as CloseIconBtn } from '../../icons/Catalog/x-close.svg';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  //   display: flex;
  //   justify-content: center;
  //   align-items: center;

  background-color: rgba(18, 20, 23, 0.5);
`;

export const Field = styled.aside`
  position: absolute;

  min-width: 400px;
  height: 100vh;

  padding: 100px 150px;
  box-sizing: border-box;

  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;

  background-color: #fff;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  cursor: pointer;
  border: none;

  background-color: transparent;
`;

export const IconBtn = styled(CloseIconBtn)`
  width: 100%;
  height: 100%;

  color: black;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: black;
  font-size: 40px;
  font-weight: bold;

  margin-bottom: 150px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 50px;
  //   padding-top: 30px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;
