import Navigation from 'components/navigation';
import UserMenu from 'components/userMenu';
import AuthNav from 'components/authNav';
import { useAuth } from 'hooks';
import { HeaderNav } from './Header.styled';

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderNav>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderNav>
  );
};

export default Header;
