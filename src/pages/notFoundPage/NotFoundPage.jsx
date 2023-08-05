import { FaRegSadTear } from 'react-icons/fa';
import { Warning, Title } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <Warning>
      <Title>Page not found</Title>
      <FaRegSadTear size="120px" />
    </Warning>
  );
};

export default NotFoundPage;
