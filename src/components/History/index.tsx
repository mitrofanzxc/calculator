import { FC } from 'react';
import { useAppSelector } from '../../store/hooks';

const History: FC = () => {
  const { history } = useAppSelector(({ calculator }) => calculator);

  return (
    <section>
      <h2>History</h2>
      {history &&
        history.map((value) => {
          return <h3 key={JSON.stringify(value)}>{value}</h3>;
        })}
    </section>
  );
};

export { History };
