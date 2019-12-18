import React from 'react';
import './App.css';
import {binarySearch} from './helpers/search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: '', search: '', type: 'linear'};
  }
  handleChange = e => {
    const input = e.target.value;
    const change = e.target.name;
    this.setState({[change]: input});
  };

  makeArray = string => {
    const arrayOfString = string.split(' ');
    const arrayOfInt = arrayOfString.map(x => parseInt(x, 10));
    return arrayOfInt;
  };

  handleSubmit = e => {
    e.preventDefault();
    const searchNum = this.state.search;
    let inputArray = this.makeArray(this.state.input);
    if (this.state.type == 'linear') {
    } else if (this.state.type == 'BST') {
      inputArray = inputArray.sort((a, b) => a - b);
      binarySearch(inputArray, searchNum);
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={e => this.handleSubmit(e)}>
            <label>
              Input :
              <textarea
                id="input"
                name="input"
                cols="30"
                rows="10"
                value={this.state.input}
                onChange={e => this.handleChange(e)}></textarea>
            </label>
            <label>
              Search For:
              <input
                type="text"
                name="search"
                value={this.state.change}
                onChange={e => this.handleChange(e)}
              />
            </label>
            <label>
              Search Type:
              <select
                id="type"
                name="type"
                value={this.state.type}
                onChange={e => this.handleChange(e)}>
                <option value="BST">BST</option>
                <option value="linear">Linear</option>
              </select>
            </label>
            <button>Submit</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
