import { PureComponent } from 'react';

class HistoryCC extends PureComponent {
  render() {
    return (
      <section>
        <h2>History CC</h2>
        {/* {history &&
          history.map((value) => {
            return <h3 key={JSON.stringify(value)}>{value}</h3>;
          })} */}
      </section>
    );
  }
}

export { HistoryCC };
