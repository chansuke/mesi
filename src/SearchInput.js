import React from 'react';

class SearchInput extends React.Component {
  handleChange = event => {
    this.props.textChange(event);
  };
  render() {
    return <input onChange={this.handleChange} />;
  }
}

export default SearchInput;
