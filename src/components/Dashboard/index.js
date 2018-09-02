import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import { getTotalMarks } from 'utils';
import { NAME, ASC } from 'constants/index';

import './Dashboard.css';

import Card from 'components/Card';
import Header from 'components/Header';

class Dashboard extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.props.fetchStudents();
  }

  componentWillReceiveProps() {
    this.setState({ loading: false });
  }

  renderStudentCards = () => {
    const { students, sort, filter } = this.props;
    let studentList = Object.values(students);

    if(filter) {
      studentList = this.filterStudents(studentList, filter);
    }

    if (sort && sort.type) {
      studentList = this.sortStudents(studentList, sort);
    }

    if (studentList.length === 0) {
      return <div>No Results</div>;
    }

    return studentList.map((student) => {
      return (
        <div className="card-container" key={student.rollNo}>
          <Card card={student} />
        </div>
      );
    });
  }

  sortStudents = (list, sort) => {
    const { type, order } = sort;
    return list.sort((student1, student2) => {
      if(type === NAME) {
        if(order === ASC) {
          return student1.name > student2.name ? 1 : -1;
        } else {
          return student1.name < student2.name ? 1 : -1;
        }
      } else {
        if(order === ASC) {
          return getTotalMarks(student1.marks) > getTotalMarks(student2.marks) ? 1 : -1;
        } else {
          return getTotalMarks(student1.marks) < getTotalMarks(student2.marks) ? 1 : -1;
        }
      }
    });
  }

  filterStudents = (list, filter) => {
    filter = filter.toLowerCase();
    return list.filter((student) => {
      const name = student.name.toLowerCase();
      return filter ? name.startsWith(filter) : true;
    });
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      );
    }

    return (
      <Fragment>
        <Header />
        <div className="dashboard">
          { this.renderStudentCards() }
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ students, sort, filter }) => {
  return {
    students,
    sort,
    filter
  }
};

export default connect(mapStateToProps, actions)(Dashboard);
