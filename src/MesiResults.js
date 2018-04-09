import React from 'react';
import MesiResultRow from './MesiResultRow';

class MesiResults extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.mesiData.map(mesi => {
          return <MesiResultRow title={mesi.title} />;
        })}
      </React.Fragment>
    );
  }
}

export default MesiResults;
