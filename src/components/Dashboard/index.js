import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import { getTotalMarks } from 'utils';
import { NAME, ASC } from 'constants/index';

import './Dashboard.css';

import Card from 'components/Card';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchStudents();
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
    return (
      <div className="dashboard">
        { this.renderStudentCards() }
      </div>
    );
  }
}

const mapStateToProps = ({ students, sort, filter }) => ({
  students,
  sort,
  filter
});

export default connect(mapStateToProps, actions)(Dashboard);
