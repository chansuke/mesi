import React from 'react';
import MesiResultRow from './MesiResultRow';
import './MesiResults.css'

class MesiResults extends React.Component {
  render() {
    return (
      <div className="component-mesi-results">
        {this.props.mesiData.map(mesi => {
          return <MesiResultRow title={mesi.title} />;
        })}
      </React.Fragment>
    );
  }
}

export default MesiResults;
