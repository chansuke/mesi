import React from 'react';

class MesiResultRow extends React.Component {
  render() {
    return <React.Fragment>{this.props.title}</React.Fragment>;
  }
}

MesiResultRow.propTypes = {
  title: React.PropTypes.string
};
export default MesiResultRow;
