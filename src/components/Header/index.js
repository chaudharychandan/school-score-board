import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

import { TOTAL_MARKS, NAME, ASC, DESC } from 'constants/index';


import './Header.css';

class Header extends Component {
  state = {
    searchString: '',
    sort: {
      type: '',
      order: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      const { sort, filter } = nextProps;
      this.setState({ sort, searchString: filter });
    }
  }

  onSearchChange = event => {
    const searchText = event.target.value || '';
    this.props.filterStudents(searchText);
  }

  onSort = (type) => {
    const { sort } = this.state;
    let newSort = {};
    newSort.type = type;
    switch (sort.order) {
      case ASC:
        newSort.order = DESC;
        break;
      case DESC:
        newSort.order = ASC;
        break;
      default:
        newSort.order = ASC;
    }

    this.props.sortStudents(newSort);
  }

  render() {
    const { searchString, sort } = this.state;
    return (
      <header className="app-header">
        <div className="search-box-container">
          <input type="text" placeholder="Search by name" onChange={event => this.onSearchChange(event)} value={searchString} />
        </div>
        <div className="sort-btns">
          <button onClick={(event) => this.onSort(NAME)}>
            <span>Sort by Name</span>
            { sort.type === NAME ? sort.order === ASC ? <span>(A-Z)</span> : <span>(Z-A)</span> : '' }
          </button>

          <button onClick={(event) => this.onSort(TOTAL_MARKS)}>
            <span>Sort by Total Marks</span>
            { sort.type === TOTAL_MARKS ? sort.order === ASC ? <span>(Increasing)</span> : <span>(Decreasing)</span> : '' }
          </button>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ sort, filter }) => ({
    sort,
    filter
});

export default connect(mapStateToProps, actions)(Header);
