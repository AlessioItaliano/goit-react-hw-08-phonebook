import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import Button from 'components/Button';

import * as s from './SideBar.styled';

const SideBarRoot = document.getElementById('sideBar-root');

const SideBar = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <s.Backdrop onClick={handleBackdropClick}>
      <s.Field>
        <s.CloseButton onClick={onClose} aria-label="Close">
          <s.IconBtn />
        </s.CloseButton>
        <s.Title>Rental</s.Title>
        <s.Nav>
          <s.StyledLink to="/" onClick={onClose}>
            <Button> Home </Button>
          </s.StyledLink>
          <s.StyledLink to="/catalog" onClick={onClose}>
            <Button> Catalog </Button>
          </s.StyledLink>
          <s.StyledLink to="/favorites" onClick={onClose}>
            <Button> Favorites </Button>
          </s.StyledLink>
        </s.Nav>
      </s.Field>
    </s.Backdrop>,
    SideBarRoot
  );
};

export default SideBar;
