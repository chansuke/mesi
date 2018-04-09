import React from 'react';

class SearchInput extends React.Component {
  handleChange = () => {
    console.log('Input the mesi');
  };
  render() {
    return <input onChange={this.handleChange} />;
  }
}

export default SearchInput;
