import React from 'react';
import './MesiResultRow.css'

class MesiResultRow extends React.Component {
  render() {
    return (
      <div className="component-mesi-result-row">
        {this.props.title}
      </div>
    )
  }
}

export default MesiResultRow;
