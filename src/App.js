import React from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import MesiResults from './MesiResults';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <SearchInput />
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
