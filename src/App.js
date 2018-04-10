import React from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import MesiResults from './MesiResults';
import mesiList from './mesiList.json';

class App extends React.Component {
  handleSearchChange = event => {
    console.log('search input changed:', event.target.input);
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <MesiResults
          mesiData={[
            {
              title: 'Udon'
            },
            {
              title: 'Curry'
            },
            {
              title: 'Tonkatsu'
            }
          ]}
        />
      </React.Fragment>
    );
  }
}

export default App;
