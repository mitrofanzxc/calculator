import { FC } from 'react';
import { ErrorWrapper } from './styled';

const NotFound: FC = () => {
  return (
    <ErrorWrapper>
      <h2>404</h2>
      <h2>Not Found</h2>
      <h2>The resourse requested could not be found!</h2>
    </ErrorWrapper>
  );
};

export { NotFound };
