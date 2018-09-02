import React, { Component } from 'react';
import { connect } from 'react-redux';

import BarChart from 'components/BarChart';
import Marksheet from 'components/Marksheet';

import './Student.css';

class Student extends Component {
  state = {
    student: null
  };

  componentDidMount() {
    const studentId = this.props.match.params.id;
    const student = this.props.students[studentId];
    this.setState({ student });
  }

  render() {
    const { student } = this.state;
    if (!student) {
      return null;
    }

    return (
      <div className="student-details">
        <BarChart data={student} />
        <Marksheet data={student} />
      </div>
    );
  }
}

const mapStateToProps = ({ students }) => ({
  students
});

export default connect(mapStateToProps)(Student);
