import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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

    return (
      <div className="student-details">
        <Link to="/">DashBoard</Link>
        { student ?
          (
            <Fragment>
              <BarChart data={student} />
              <Marksheet data={student} />
            </Fragment>
          ) : null
        }
      </div>
    );
  }
}

const mapStateToProps = ({ students }) => ({
  students
});

export default connect(mapStateToProps)(Student);
