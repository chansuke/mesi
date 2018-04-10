import React from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import MesiResults from './MesiResults';
import filterMesi from './filterMesi';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredMesi: filterMesi('', 20),
    };
  }
  
  handleSearchChange = event => {
    this.setState({
      filteredMesi: filterMesi(event.target.value, 20),
    })
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <MesiResults
          mesiData={this.state.filteredMesi}
        />
      </React.Fragment>
    );
  }
}

export default App;
