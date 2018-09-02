import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

import './Dashboard.css';

import Card from 'components/Card';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchStudents();
  }

  renderStudentCards = () => {
    const students = Object.values(this.props.students);
    return students.map((student) => {
      return (
        <div className="card-container" key={student.rollNo}>
          <Card card={student} />
        </div>
      );
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

const mapStateToProps = ({ students }) => ({
  students
});

export default connect(mapStateToProps, actions)(Dashboard);
