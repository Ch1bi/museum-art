import React, { Component } from 'react';
import './App.css';

class Search extends Component {

  constructor(props){

    super(props)

    this.state = {

      search: ""
    }

  }

  
  render() {

    return (

      <div className="search-container">

          <h1>Search for art</h1>

          <form className="column" onSubmit={this.handleSubmit}>

              <input className='header'  placeholder='search art' type="text" htmlFor='username' value={this.state.seatch}/>
            
              <button
          className='button'
          type='submit'
          disabled={!this.state.username}>
            Submit
        </button>
          </form>


      </div>
     
    )
  }
}

export default Search;
