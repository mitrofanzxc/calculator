import { FC } from 'react';
import { useAppSelector } from '../../../store';
import { HistoryWrapper, HistoryTittle } from '../styled';

const HistoryFC: FC = () => {
  const { history } = useAppSelector(({ calculator }) => calculator);

  return (
    <HistoryWrapper>
      <HistoryTittle>History FC</HistoryTittle>
      {history &&
        history.map((value) => {
          return <h3 key={JSON.stringify(value)}>{value}</h3>;
        })}
    </HistoryWrapper>
  );
};

export { HistoryFC };
