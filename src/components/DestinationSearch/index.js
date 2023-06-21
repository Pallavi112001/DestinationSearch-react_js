// Write your code here

import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="search-container">
          <h1 className="heading">Destination Search</h1>
          <div className="input-container">
            <input
              type="search"
              value={searchInput}
              placeholder="search"
              onChange={this.onChangeSearchInput}
              className="input"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="img"
            />
          </div>
          <ul className="destination-list">
            {searchResults.map(eachResult => (
              <DestinationItem
                key={eachResult.id}
                destinationInfo={eachResult}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
