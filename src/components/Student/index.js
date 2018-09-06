import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStudents } from 'actions';
import BarChart from 'components/BarChart';
import Marksheet from 'components/Marksheet';

import './Student.css';

class Student extends Component {
  state = {
    student: null,
    invalid: false
  };

  componentDidMount() {
    this.studentId = this.props.match.params.id;
    const count = Object.keys(this.props.students).length;

    if (count === 0) {
        this.props.fetchStudents();
    } else {
      const student = this.props.students[this.studentId];
      if(student) {
        this.setState({ student });
      } else {
        this.setState({ invalid: true });
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const student = nextProps.students[this.studentId];
    if (student) {
      this.setState({ student });
    } else {
      this.setState({ invalid: true });
    }
  }

  renderStudentDetails = () => {
    const { student, invalid } = this.state;
    if (student) {
      return (
        <Fragment>
          <BarChart data={student} />
          <Marksheet data={student} />
        </Fragment>
      );
    } else {
      if (invalid) {
        return <div className="error">There is no student present with this Roll no.</div>;
      } else {
        return <div className="loading">Loading...</div>;
      }
    }
  }

  render() {
    const { student, invalid } = this.state;

    return (
      <div className="student-details">
        <Link to="/">DashBoard</Link>
        { this.renderStudentDetails() }
      </div>
    );
  }
}

const mapStateToProps = ({ students }) => ({
  students
});

export default connect(mapStateToProps, { fetchStudents })(Student);
